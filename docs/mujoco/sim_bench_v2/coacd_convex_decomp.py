import coacd
import trimesh
import numpy as np
import os

# 根据官方示例，coacd.Mesh 直接位于 coacd 包下
# 而不是 coacd.lib.mesh 或 coacd.mesh 子模块
# 如果 `from coacd import Mesh` 报错，那可能是因为你的 `coacd` 版本
# 与官方示例或我之前推断的不同，你需要回到之前的调试步骤去确认 Mesh 的实际导入路径。
# 但通常，CoACD_Mesh 只是一个内部实现细节，外部直接用 coacd.Mesh
try:
    from coacd import Mesh # 尝试直接从 coacd 包导入 Mesh 类
except ImportError:
    print("Error: Could not import 'Mesh' from 'coacd'.")
    print("Please check your coacd installation and package structure.")
    print("You might need to use 'from coacd.mesh import CoACD_Mesh' or similar if 'Mesh' is aliased differently.")
    exit()

# 1. 加载你的非凸网格文件
mesh_path = '/home/yuning/shadowhand_ws/models/sim_bench_v2/assets/i12_traj.stl' # 请替换为你的实际文件路径
try:
    trimesh_mesh = trimesh.load(mesh_path)
except FileNotFoundError:
    print(f"错误：网格文件未找到。请检查文件路径和名称：{mesh_path}")
    exit()

print(f"成功加载网格：{trimesh_mesh.vertices.shape[0]} 个顶点, {trimesh_mesh.faces.shape[0]} 个面。")

# 2. 将 trimesh 网格转换为 coacd.Mesh 对象
# 这是关键一步，与官方示例完全一致
coacd_input_mesh = Mesh(trimesh_mesh.vertices, trimesh_mesh.faces)

# 3. 执行凸分解
print("开始执行凸分解，这可能需要一些时间...")

# 所有参数都根据官方示例来传递
decomposed_hulls = coacd.run_coacd(
    coacd_input_mesh,       # 第一个参数是 coacd.Mesh 对象
    threshold=0.01,         # 阈值，可以调整
    max_convex_hull=100,     # 最大凸包数量，可以调整
    preprocess_mode="auto", # 预处理模式
    preprocess_resolution=50, # 预处理分辨率
    resolution=5000,        # 表面采样分辨率
    mcts_nodes=20,          # MCTS 节点数
    mcts_iterations=150,    # MCTS 迭代次数
    mcts_max_depth=3,       # MCTS 最大深度
    pca=False,              # 是否使用 PCA 对齐
    merge=True,             # 是否尝试合并凸包 (这里我默认设为True，因为官方示例是 `not args.no_merge`)
    decimate=False,         # 是否减少每个凸包的顶点数
    max_ch_vertex=256,      # 每个凸包的最大顶点数 (decimate 为 True 时生效)
    extrude=False,          # 是否挤出重叠面
    extrude_margin=0.01,    # 挤出边距 (extrude 为 True 时生效)
    apx_mode="ch",          # 近似模式 ("ch" 为凸包, "box" 为盒子)
    seed=0,                 # 随机种子
)

print(f"分解完成！生成了 {len(decomposed_hulls)} 个凸包。")

# 4. 将分解后的凸包保存为单独的 OBJ 文件
output_dir = "assets/i12_traj"
os.makedirs(output_dir, exist_ok=True)

output_files = []
for i, (vertices, faces) in enumerate(decomposed_hulls):
    # CoACD 返回的 vertices 和 faces 已经是 numpy 数组
    convex_mesh = trimesh.Trimesh(vertices=vertices, faces=faces)
    output_filename = os.path.join(output_dir, f'part_{i}.obj')
    convex_mesh.export(output_filename)
    output_files.append(output_filename)
    print(f"已保存：{output_filename}")

print("\n所有凸包已保存。现在你可以将它们导入 MuJoCo XML 了！")
print("请确保将这些 .obj 文件放在 MuJoCo XML 可以访问的路径中。")

# # 可选：打印一个简单的 MuJoCo XML 片段示例
# print("\n--- MuJoCo XML 示例片段 ---")
# print("<asset>")
# for i in range(len(decomposed_hulls)):
#     print(f'    <mesh name="collision_part_{i}" file="decomposed_meshes/convex_part_{i}.obj"/>')
# print("</asset>")
# print("<body>")
# print("    ")
# print("    <body name=\"your_link_name\">")
# for i in range(len(decomposed_hulls)):
#     print(f'        <geom type="mesh" mesh="collision_part_{i}" contype="1" conaffinity="1"/>')
# print("    </body>")
# print("</body>")
# print("--------------------------")
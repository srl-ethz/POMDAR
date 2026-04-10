import mujoco
m = mujoco.MjModel.from_xml_path("/home/yuning/shadowhand_ws/models/sim_bench_v2/0_sim_pomdar_scene_orca.xml")
d = mujoco.MjData(m)

b1 = mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_BODY, "hand_mocap")
b2 = mujoco.mj_name2id(m, mujoco.mjtObj.mjOBJ_BODY, "virtual_palm_root")
print("body ids:", b1, b2)  # 均应 >=0

found = False
for i in range(m.neq):
    if m.eq_type[i] == mujoco.mjtEq.mjEQ_WELD and m.eq_obj1id[i] == b1 and m.eq_obj2id[i] == b2:
        found = True
        print("found weld equality id:", i)
        break
print("weld_exists:", found, "neq:", m.neq)

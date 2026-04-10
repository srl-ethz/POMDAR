import mujoco
import mujoco.viewer

model = mujoco.MjModel.from_xml_path("0_sim_pomdar_scene_orca.xml")

data = mujoco.MjData(model)

with mujoco.viewer.launch_passive(model, data) as viewer:
    while viewer.is_running():
        mujoco.mj_step(model, data) # 即使是静态物体，也需要步进以更新渲染
        viewer.sync()
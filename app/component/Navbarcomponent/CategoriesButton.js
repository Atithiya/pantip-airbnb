const filterImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcElEQVR4nO2YS0oDQRCGPzchwU1yheQOPo6h7oKeImiEQEgWCdnoaQweQC+hzhVU1IUPhJGGCjRD4vTEeVSb/qBo8icDf3dPV3UKAoFAYA0awBiIgE8ZR6Krx5i8BeIlYfQ6yhmvMB9LDFFOZJk9BbaBM0u7RznfltmaaDVLM9//iSnwnrLNeYVN2m+NpwkpbAFvJZnPOoFYvKUy8XkH/sUZKDML9SULnfuUhUa+14HGL5X4pqxK3AJO5BU4BpoZn6/LSj8AHzIOyzJ/BDwnVs58PsQD9oGvFdtv9F2Uc20ZvgMuZFxoc5Tzaplti9axtBcU0AF6ckCT4VJF+wVFz1o050KT5z0mj4g2YgJtYADMloTLBGYFxcD1FfL+ELumUXPpupRxoV2hnL2UQraDBxwATwnzj6J7QxPoSn7uZrjMhYZWlYSG1sb8mZ+W0FaxiR1DVWNrnQnEmhpbhe1AkYSGVtWEhpYGKm1oBQIB9PED1bH/GIQ4k40AAAAASUVORK5CYII=";

export function CategoriesButton() {
  return (
    <div className="flex gap-4 py-3 ms-16">
      <div className="btn btn-ghost border-gray-300 flex gap-3 rounded-xl  group hover:cursor-pointer ">
        <div className="w-4 h-4">
          <img src={filterImage} />
        </div>
        <div className="text-xs font-semibold">ตัวกรอง</div>
      </div>
      <div className="btn btn-ghost border-gray-300 flex gap-5 rounded-xl  group hover:cursor-pointer bg-white ">
        <div className="text-xs font-semibold">แสดงกระทู้ที่ยังไม่อ่าน</div>
        <input type="checkbox" className="toggle toggle-sm" />
      </div>
    </div>
  );
}

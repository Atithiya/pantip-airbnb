export function MobileButtonNavbar() {
  return (
    <div className="lg:hidden px-6 py-3 text-xl">
      <div className="btn btn-ghost border-gray-300 flex gap-5 rounded-xl  group hover:cursor-pointer bg-white">
        <div className=" font-semibold">แสดงกระทู้ที่ยังไม่อ่าน</div>
        <input type="checkbox" className="toggle toggle-sm" />
      </div>
    </div>
  );
}

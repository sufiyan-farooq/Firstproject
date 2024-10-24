import { Image,Button ,Modal } from "antd";
import { useState } from "react";

export default function Table() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] =useState(true);
  
    const showLoading = () => {
      setOpen(true);
      setLoading(true);
  
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
  return (
    <div className="bg-slate-800 w-full h-fit-content p-10 mt-10 ">
      <table className="min-w-full text-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-100 tracking-wider">
              Product Image
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-100 tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-100 tracking-wider">
              Total Price
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-100 tracking-wider">
              Detail
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 border-b border-gray-300">
              <Image
                width={70}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />{" "}
            </td>
            <td className="px-6 py-4 border-b border-gray-300">Men</td>
            <td className="px-6 py-4 border-b border-gray-300">$30</td>
            <td className="px-6 py-4 border-b border-gray-300">
              <Button
                type="primary"
                onClick={showLoading}
              >
                View Detail
              </Button>
              <Modal
                title={<p>Product Detail</p>}
                loading={loading}
                open={open}
                onCancel={() => setOpen(false)}
              >
                <h1>HElo</h1>
              </Modal>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

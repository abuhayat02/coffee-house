import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


export default function Card({ data }) {
    let { _id, coffeeName, urlCoffee, chefCoffee, tasteCoffee } = data;

    let  deleteData = (id)=>{
        fetch(`http://localhost:5001/addCoffee/${id}` , {
            method : "DELETE"
        })
    }
    return (
        <div className="flex my-shadow-2  flex-row justify-between items-center">
            <img src={urlCoffee} className="w-32 md:w-48" alt="" />
            <div className="text-start">
                <p>
                    {coffeeName}
                </p>
                <p>
                    {chefCoffee}
                </p>
                <p>
                    {tasteCoffee}
                </p>
            </div>
            <div className="join join-vertical">
                <button className="btn join-item"><CiEdit /></button>
                <button onClick={()=>deleteData(_id)} className="btn join-item"><MdDeleteForever /></button>
                <button className="btn join-item"><FaRegEye /></button>
            </div>
        </div>
    )
}

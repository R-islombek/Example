import './Category.css'
import { useState, useEffect } from 'react'

function Category() {
    const [category, setCategory] = useState([])
    const getCategory = () =>{
        axios({
            url:"https://api.dezinfeksiyatashkent.uz/api/categories",
            method: "GET",
            token:"setToken",
        })
        .then((res) => {
            setCategory(res.data)
            console.log(data);
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    useEffect(() => {
        getCategory()
    }, [])
 

  return (
    <div className="category">
        <div className="container category__container">
            <button className="edit">Edd</button>
            {
                category && category.map((item,index) => (
            <table key={index}>
                <tr>
                    <th>N</th>
                    <th>id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Harakat</th>
                </tr>
                <tr>
                <td>1</td>
                <td>{}item.id</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
            </table>
                ))}

        </div>
    
     
    </div>
  )
}

export default Category
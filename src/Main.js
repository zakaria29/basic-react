import React from "react"
import Alert from "./components/Alert";
import data from "./ArrayData";
import Counter from "./components/Counter";
class Main extends React.Component{
    render(){
        
        return (
            <div className="container">
                {/* <Alert warna="danger" teks="Awas ada hantu" />
                <Alert warna={data[2].color} teks={data[2].text} />

                { data.map(item => (
                    <Alert warna={item.color} teks={item.text} />
                ))}
                 */}
                 <Counter />
                 <Counter />
                
            </div>
        )
    }
}
export default Main;
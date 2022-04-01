import React, {useState} from "react";
import * as yup from "yup"


const orderFormValues = {
    name: " ",
    size: " ",
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    special:" ",

}



const OrderForm = ()=>{

 const formSchema = yup.object().shape({
    name: yup.string().min(2, "name must be at least 2 characters" ),
    size: yup.string(),
    topping1: yup.boolean().oneOf([true],"You have to pick your topping"),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean(),
    special: yup.string(),

})

const [form, setForm] = useState(orderFormValues)


const SubmitHandler = (e) =>{

    e.preventDefault()


}
const formChange = evt =>{
const name = evt.target.name
const value = evt.target.type === "checkbox"?  evt.target.checked : evt.target.value
setForm({...form, [name]: [value]})
}
    return(
        <section className = "pizza-form-wrapper">

            <article>
                <h2>Order Pizza Here</h2>
        
            
                <form onSubmit={SubmitHandler}>
                    <label>Name
                        <input 
                        type ="text"
                        name ="name"
                        id ="name-input"
                        onChange = {formChange}
                        value = {form.name}
                        />
                    </label>
                    {/* ////////// DROPDOWN ////////// */}
                    {/* ////////// DROPDOWN ////////// */}
                    {/* ////////// DROPDOWN ////////// */}
                    <label>Size
                    <select 
                   
                  
                    name = 'size'
                    id= "size-dropdown"
                    value = {form.size}
                    onChange = {formChange}
                    >
                    <option value ="">Select your size pizza</option>
                    <option value = "10">10 inches</option>
                    <option value = "12">12 inches</option>
                    <option value = "14">14 inches</option>
                    <option value = "16">16 inches</option>
                        
                    </select>
                    </label>
                    <div className ="form-group checkboxes">
                    <h4>Choose your toppings</h4>
                    {/* ////////// CHECKBOXES ////////// */}
                    {/* ////////// CHECKBOXES ////////// */}
                    {/* ////////// CHECKBOXES ////////// */}
                    <label>Peperoni
                    <input
                    type ="checkbox"
                    name = "topping1"
                    id ="size-dropdown"
                    onChange = {formChange}
                
                
                    />
                    </label>

                    <label>Sausage
                    <input 
                    type ="checkbox"
                    name = "topping2"
                    id = "size-dropdown"
                    onChange = {formChange}
                    />

                    </label>
                    <label>Meatball
                    <input 
                    type ="checkbox"
                    name = "topping3"
                    id = "size-dropdown"
                    onChange = {formChange}
                    />

                    </label>
                    <label>Pineapple
                    <input 
                    type ="checkbox"
                    name = "topping4"
                    id = "size-dropdown"
                    onChange = {formChange}

                    />

                    </label>
                    
                    
                    </div>
                  
                   
                    <label>Special Instructions
                     <input
                     type ="text"
                     name ="special"
                     id ="special-text"
                     value = {form.special}
                     onChange = {formChange}
                     />
                    </label>
                    <button type= "submit" id = "order-button">Your pizza is waiting!</button>
                </form>
            </article>

        </section>
    )
}
export default OrderForm
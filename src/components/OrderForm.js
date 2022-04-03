import React, {useState, useEffect} from "react";
import * as yup from "yup"
import schema from "../Validation/FormSchema"


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
    name: yup.string().min(2,"name must be at least 2 characters"),
    size: yup.string(),
    topping1: yup.boolean().oneOf([true],"You have to pick your topping"),
    topping2: yup.boolean().oneOf([true],"You have to pick your topping"),
    topping3: yup.boolean().oneOf([true],"You have to pick your topping"),
    topping4: yup.boolean().oneOf([true],"You have to pick your topping"),
    special: yup.string().oneOf([true],"You have to pick your topping"),

})
const [errors, setErrors ] = useState(
    {
        name: " ",
        size: " ",
        topping1: "",
        topping2: "",
        topping3: "",
        topping4: "",
        special:" ",
    
    }
)
const [disabled, setDisabled]= useState(true)

const validateChange = (name, value) => {
yup.reach(formSchema, name)
.validate(value)
.then(()=>{
    setErrors({...errors,[name]: ""})

})
.catch((error)=>{
    setErrors({...errors,[name]: error.errors[0]})
}
)
}
const [form, setForm] = useState(orderFormValues)


const SubmitHandler = (e) =>{

    e.preventDefault()

}
useEffect(()=>{
    formSchema.isValid(form)
     .then((valid)=>{
         setDisabled(!valid)
     })
},[form])



const formChange = evt =>{
const name = evt.target.name
const value = evt.target.type === "checkbox"?  evt.target.checked : evt.target.value

validateChange(name,value)

setForm({...form, [name]: [value]})

}
    return(
        <section className = "pizza-form-wrapper">

            <article>
                <h2>Order Pizza Here</h2>
        
            
                <form onSubmit={SubmitHandler}>
                    <label>
                        <p>Name <span className = "error">{errors.name}</span></p>
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
                    <button type= "submit" disabled= {disabled} id = "order-button">Your pizza is waiting!</button>
                </form>
            </article>

        </section>
    )
}
export default OrderForm
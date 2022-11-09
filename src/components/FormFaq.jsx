import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import {FaLocationArrow as Enviar, FaRegTimesCircle as Cancelar} from 'react-icons/fa'

const DivForm = styled.div`
    width: 70%; margin: auto; font-family: Arial, Helvetica, sans-serif;
    h1{text-align:center;}
    form{width: 80%; margin:auto;}
    form input{width:100%; padding: 5px; margin-bottom:5px;}
    a{background-color: red; margin-bottom:5px; color:white; text-decoration:none; padding: 5px;}
    button{color: white; background-color:green; border: none; display:inline-block;
    padding:6px; margin-right:10px;}
`

export default function FormFaq(){

    let {id} = useParams()

    const [novo, setNovo] = useState({
        cd_faq:id,
        nome_faq:"",
        email_faq:"",
        ds_problema:""
    })

    let metodo = "post"

    if(id){
        metodo = "put"
    }

    const handleChange = e=>{
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e=>{
        e.preventDefault()

        fetch('http://localhost:3000//SolutionHelp/rest/faq',{
            method: metodo,
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(novo)
        }).then(()=>{
            window.location = "/"
        })
    }

    useEffect(()=>{
        if(id){
            fetch(`/SolutionHelp/faq/${id}`)
            .then((resp)=>{
                return(resp.json())
            }).then(data=>{
                setNovo(data)
            })
        }
    },[id])
    return(
        <DivForm>
            <h1>FormFaq</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nome_faq" value={novo.nome_faq}
                placeholder="Nome" onChange={handleChange}/> <br/>

                <input type="text" name="email_faq" value={novo.email_faq}
                placeholder="Email" onChange={handleChange} step="0.01"/> <br/>

                <input type="text" name="ds_problema" value={novo.ds_problema}
                placeholder="Problema" onChange={handleChange}/> <br/>

                <button><Enviar/></button>
                <Link to="/portalusuario" ><Cancelar/></Link>
            </form>
        </DivForm>
    )
}
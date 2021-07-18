import React from 'react';
import Button from './components/Button';
import Figure from './components/Figure';
import Input from './components/Input';
import { useState } from 'react';
import './style/App.css'


 const App = (props) =>{
     const [ email, setEmail] = useState("");

     function cadastrarEmail(){
         var emailsCadastrados=[]
         if(email){ 
             if(JSON.parse(localStorage.getItem("emails")) != null){        
                emailsCadastrados = JSON.parse(localStorage.getItem('emails')); 
             }      
             emailsCadastrados.push(email);
             let emailsCadastradosJson = JSON.stringify(emailsCadastrados);
             localStorage.setItem('emails', emailsCadastradosJson);
            alert("Email Cadastrado com Sucesso!")
         }else{
             alert("digite seu email")
         }

     }
     
     return(
         <>            
            <Figure></Figure>
            <br></br>
            <h1>BLACK FRIDAY</h1>
            <div className="subtitulo">
                <h2>Apenas para os 5 Primeiros Clientes</h2>
                <h2>Aproveite e cadastre seu email</h2>
            </div>
            <div className="row">
            <div className="col">
            </div>
            <div className="col">            
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">QUERO APROVEITAR ESSA PROMOÇÃO INÉDITA</h5>
                        <Input value={email} onChange={e => setEmail(e.target.value)}></Input>                
                        <Button className="btn btn-primary" onClick={cadastrarEmail}>Cadastrar</Button>
                    </div>
                </div>

            </div>
            <div className="col">
            </div>
        </div>
         </>
     )
 }

export default App;

import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api/Api';



function Sair (){
    const navigate = useNavigate()

    const getProduts = async () => {
    const token = localStorage.getItem("token")
    const url = '/logout'
    await api.post(url, {
    "token": token
    }).then(response => {
        if(response.status == 200){
            localStorage.removeItem("token")
            navigate("/")
            console.log('conta exluida com sucesso')
        }else if(response.status == 400 || 422){
            alert('ERRO AO DELETAR CONTA')
        }
    })
}
getProduts()
// return(
//     <>
//     </>
// )
   

    
    }

export default Sair


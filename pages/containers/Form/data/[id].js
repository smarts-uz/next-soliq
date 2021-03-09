import axios from "axios";
import { useRouter } from "next/router";
import BasicWithHTML from "../../../../components/Basic/formikHtml";


const Details = async  () => {
    const router = useRouter();
    // await axios.post('/api/Datas/get', {id: router.query.id})
    // .then(res=>{
    //     console.log(res);
    // })
    // .catch(err=>{
    //     console.log(err);
    // })
    return (
        <>
            <BasicWithHTML/>
        </>
    )
}

export default Details;
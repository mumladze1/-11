import Card from "./cards"
import img1 from "../assets/Data_tutashkhia.jpg"
import img2 from "../assets/idostati.JPEG"
import img3 from "../assets/mtvarismotaceba.PNG"
import img4 from "../assets/17643590.jpg"


 const data =[
    { id:1, name:"დათა თუთაშხია", image:img1, description:"სიძულვილი,შურისძიება და ადამიანურობა რთულ სამყაროში", perN:['დათა','მუშნი'] },
    { id:2, name:"დიდოსტატის მარჯვენა", image:img2, description:"გიორგი I-ს დროინდელი საქართელო,ხელოვნებისა და ძალაუფლების ბრძოლა", perN:['გიორგი','უტა'] },
    { id:3, name:"მთვარის მოტაცება", image:img3, description:"ძმის შურისძიება მეფეზე", perN:['დემნა','ზურაბი']},
    { id:4, name:"გმირთა ვარამი", image:img4, description:"სიყვარული და ღალატი მტრებსა და მეგობრებს შორის", perN:['ზვიადაური','მაჩაბელი']},
 
 ]

const CardList = () => {
    function action (name,perN){
        console.log( `წიგნი ${name} პერსონაჟები ${perN} `)
    }
  return (
    <div className="cardlist">
        {data.map((card) => <Card kye={card.id} name={card.name} image={card.image} description={card.description} perN={card.perN} action={action}/>)}
     {/* <Card image={img1} name="დათა თუთაშხია" description="სიძულვილი,შურისძიება და ადამიანურობა რთულ სამყაროში" perN={['დათა','მუშნი']} action={action}  />
    <Card image={img2}  name="დიდოსტატის მარჯვენა" description="გიორგი I-ს დოინდელი საქართელო,ხელოვნებისა და ძალაუფლების ბრძოლა" perN={['გიორგი','უტა']} action={action}/>
    <Card image={img3}  name="მთვარის მოტაცება" description="ძმის შურისძიება მეფეზე" perN={['დემნა','ზურაბი']} action={action} />
    <Card image={img4}  name="გმირთა ვარამი" description="სიყვარული და ღალატი მტრებსა და მეგობრებს შორის" perN={['ზვიადაური','მაჩაბელი']} action={action} /> */}
    </div>
  )
}

export default CardList
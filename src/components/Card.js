import Fill from "../components/filterColor";
import CardCon from '../components/CardInfo'

  let AllCard = (
    <>
      {/* FIXME: GIve me title PLZZZZZ add me button*/}
      {/* Option Filter 1 BOX */}
      {/* API photos as Card ALL as 4 ITEMS INLINE */}
      <div className="myflex  ">
        <div className="w-3/12">
          <Fill />
          <CardCon/>
          <CardCon/>
          <CardCon/>
        </div>
        <div className="w-3/12">
          <CardCon/>
          <CardCon/>
          <CardCon/>
          <CardCon/>
        </div>
        <div className="w-3/12">
          <CardCon/>
          <CardCon/>
          <CardCon/>
          <CardCon/>
        </div>
        <div className="w-3/12">
          <CardCon/>
          <CardCon/>
          <CardCon/>
          <CardCon/>
        </div>
      </div>
    </>
  );
  

function Card() {
  return (
    <div>{AllCard}</div>
  )
}

export default Card
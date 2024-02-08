import { Card } from "antd";


export default function CharacterCard({id, name, status, gender, image}) {

  return (
    <Card
    key={id}
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={image} />}
    >
        <h3>{name}</h3>
        <p>{status}</p>
        <p>{gender}</p>
  </Card>
  )
}
import { Card } from 'antd';
import React from 'react'

export default function CharactersCard( id,name,status,gender,image) {
  return (
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <h3>{name}</h3>
    <p>{status}</p>
    <p>{gender}</p>
    <p>{image}</p>
  </Card>
);

  
}

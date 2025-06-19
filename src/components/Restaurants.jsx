import React from 'react'
import Card from './Card'

const Restaurants = () => {
  return (
    <div className='flex'>
    <div className='flex flex-wrap justify-center gap-4'>
       <Card title="Raku Tea 楽茶" 
       type="ชานมไข่มุก" 
       img="https://food-cms.grab.com/compressed_webp/merchants/3-C33KAN31RY2DFE/hero/ca5420a9-f667-4e60-a17b-2f04fbd05cd6__store_cover__2023__03__25__08__28__32.webp">
        </Card>

        <Card title="SOrder ชากับเธอ Chagubter - เตาปูน" 
       type="ชา,กาแฟ" 
       img="https://food-cms.grab.com/compressed_webp/merchants/3-C2NYFCCDEE3VGE/hero/c77ace34288d449c95f8e456698d3581_1658460676354176549.webp">
        </Card>

        <Card title="Maru waffle - the walk ราชพฤกษ์" 
       type="ของหวาน" 
       img="https://food-cms.grab.com/compressed_webp/merchants/3-C3EAJ7W2WGCHCT/hero/e797bfc619e149be988a8905f3989f1e_1648047679025283875.webp">
        </Card>
       
        <Card title="Fire Tiger Coffee - Siam Block I" 
       type="ชาไข่มุก" 
       img="https://food-cms.grab.com/compressed_webp/merchants/3-C3T3JVMFGBUTE2/hero/62521bce6d5c4c5eb2506c6bfe131e34_1717951305906245698.webp">
        </Card>
    </div>
    </div>
  )
}

export default Restaurants
import React from 'react'
import './index.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Index() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/product')
            .then((res) => {
                setData(res.data)
            })
    })



    return (
        <>
            <div className='Cards'>
            <div className='section2Title'>
                <p>Popular Item in the market</p>
                <h1>Trending Product</h1>
            </div>
                <div className='Cards1'>
                    {(data.map((element) => (
                        <Card key={element.id} sx={{ minWidth: 400 }} className='Card'>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <img src={element.imageUrl} className='cardImage' />
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {element.name}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {element.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    )))}

                </div>


                <div className='Cards2'>
                    {(data.map((element) => (
                        <Card key={element.id} sx={{ minWidth: 400 }} className='Card'>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    <img src={element.imageUrl} className='cardImage' />
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {element.name}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {element.price}
                                </Typography>
                                
                            </CardContent>
                        </Card>
                    )))}

                </div>

            </div>

        </>
    )
}

export default Index
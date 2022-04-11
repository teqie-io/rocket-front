import React from 'react'
import {Row,Col,Card} from 'antd'
import { useState,setState } from 'react'

export default function ConfigOptins()
{

    return(
        <Card title={<h2>Subscriber Prompt</h2>}>
            <Card title={
                <div className="home-title"> 
                Browser Prompt    
                </div>
                    }
            style={{background:"#0D83DD"}}
            bodyStyle={{background:"white"}}
            className="home-card"
            >
                    
            </Card>
        </Card>
    )
}

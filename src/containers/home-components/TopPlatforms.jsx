import React from "react"
import {Card} from "antd"
import "./Home.scss";
import { Row, Col } from 'antd';
import { useCallback, useState } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";


export default function TopPlatforms()
        {

            const locations=[
             {
                id: 1,
            
                platforms: "Asus",
                percentage: 50,
            
              },
              {
                
                id: 2,
         
                platforms: "Apple",
                percentage: 25,
                
              },
              {
                
                id: 3,
           
                platforms: "Samsung",
                percentage: 15,
               
              },
              {
                
                id: 4,
           
                platforms: "Nokia",
                percentage: 10,
               
              },

           
        ];
        const [activeIndex, setActiveIndex] = useState(0);
        const onPieEnter = useCallback(
        (_, index) => {
                        setActiveIndex(index);
                        },
        [setActiveIndex]
        );
 
        return(
            
     <Card title={
                  <div className="home-title"> 
                      <Row>
                        <Col align="left" span={11}>CTR</Col>
                        <Col align="middle" span={13}>Top Platforms</Col>
                        
                      </Row>
                    </div>
                    }
        style={{background:"#0D83DD"}}
        bodyStyle={{background:"white"}}
        className="home-card">

    <Row>
        <Col align="left" span={9}>
            {locations.map(item => (
                <div key={item.id}>             
                    <Row style={{'paddingBottom':"15px"}}>
                        <Col span={12} className="home-perc">{item.percentage}%</Col> 
                        <Col span={8} >{item.platforms}</Col>   
                    </Row>   
                </div>
            ))}
        </Col>
        <Col align="left" span={15}>
          <ResponsiveContainer  width="100%" height={200}>
            <PieChart >
              {/* width={200} height={200} */}
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={locations}
                    cx={95}
                    cy={75}
                    innerRadius={38}
                    outerRadius={60}
                    fill="#0050B3"
                    dataKey="percentage"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>
          </ResponsiveContainer>
        </Col>
    </Row>
</Card>

  )
}

const renderActiveShape = (props) => {
      // const RADIAN = Math.PI / 180;
      const {
        cx,
        cy,
        // midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        // percent,
        percentage
      } = props;
      // const sin = Math.sin(-RADIAN * midAngle);
      // const cos = Math.cos(-RADIAN * midAngle);
      // const sx = cx + (outerRadius + 10) * cos;
      // const sy = cy + (outerRadius + 10) * sin;
      // const mx = cx + (outerRadius + 30) * cos;
      // const my = cy + (outerRadius + 30) * sin;
      // const ex = mx + (cos >= 0 ? 1 : -1) * 22;
      // const ey = my;
      // const textAnchor = cos >= 0 ? "start" : "end";
    
      return (
        <g>
          <text x={cx} y={cy} dy={3} textAnchor="middle" fill={fill}>
            {payload.platforms}
          </text>
          <text x={cx} y={cy} dy={22} textAnchor="middle" fill={fill}>
            {`${percentage}%`}
          </text>
          <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
          />
          <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={fill}
          />
          {/* the % text being removed because it wont fit in card */}
          {/* <path
            d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
            stroke={fill}
            fill="none"
          />
          <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
          <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            textAnchor={textAnchor}
            fill="#333"
          >{`${percentage}%`}</text>
          <text
            x={ex + (cos >= 0 ? 1 : -1) * 12}
            y={ey}
            dy={18}
            textAnchor={textAnchor}
            fill="#999"
          >
          </text> */}
        </g>
      );
    };
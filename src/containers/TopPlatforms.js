import React from "react"
import {Card} from "antd"
import "./Home.scss";
import { Row, Col } from 'antd';
import { NlFlagIcon } from "../assets/flagIcons";
import { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      percentage
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.platforms}
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
        <path
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
        </text>
      </g>
    );
  };
export default function TopLocations()
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
                        <Col span={4}>CTR</Col>
                        <Col span={4}>Top Platforms</Col>
                        
                      </Row>
                    </div>
                    }
        style={{background:"#0D83DD"}}
        bodyStyle={{background:"white"}}
        className="home-card">

    <Row>
        <Col span={9}>
            {locations.map(item => (
                <div>             
                    <Row>
                        <Col span={12} >{item.percentage}%</Col> 
                        <Col span={8} >{item.platforms}</Col>   
                    </Row>
                    <hr/>
                            
                            
                </div>
            ))}
        </Col>
        <Col span={15}>
            <PieChart width={250} height={210}>
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={locations}
                    cx={111}
                    cy={94}
                    innerRadius={30}
                    outerRadius={50}
                    fill="#8884d8"
                    dataKey="percentage"
                    onMouseEnter={onPieEnter}
                />
            </PieChart>
        </Col>
    </Row>
</Card>

        )
    }

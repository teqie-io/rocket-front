import React from 'react'
import {Row,Col,Card,Select,Checkbox,Input,InputNumber,Timeline} from 'antd'
import { useState,setState } from 'react'

const { Option } = Select;

export default function ConfigOptins()
{
    function handleChange(value) {
        console.log(value);
      }
   

    const [config,setConfig] = useState(
        {
            timingsetup :
            {
                desktop:10,
                mobile:10
            },
            intermediateprompt:
            {
                show:true,
                title:"",
                description:"",
            },
            buttonAllow:
            {
                title:"",
                bgcolor:"",
                textcolor:""
            },
            buttonLater:
            {
                title:"",
                bgcolor:"",
                textcolor:""
            },
            optintimings:
            {
                desktop:10,
                mobile:10,
                maxpromptcount:2,
                frequency:4
            },
            browserprompt:
            {
                enableoverlay:false
            }
        }
    )
    const [customPrompt,setPrompt] =useState(config.intermediateprompt.show)
    function onChangeCustomPrompt(e) {
            setPrompt(e.target.checked)
            let tmp = config
            tmp["intermediateprompt"]["show"]=e.target.checked
            setConfig(tmp)
            console.log(tmp)

      }
      function onChangeBrowserPrompt(e) {
        let tmp = config
        tmp["browserprompt"]["enableoverlay"]=e.target.checked
        setConfig(tmp)
        console.log(tmp)
      }
    // flyout widget state
    const [widgetText,setWidgetText]=useState(
        {
            before:"We would like to share our product.",
            after:"Thank you for subscribing",
            button:"Subscribe",
            mode:true
        }
        )
        function changeconfig(e)
        {
            let tmp = config
            tmp[e.target.id][e.target.name]=e.target.value
            setConfig(tmp)
            console.log(config)
        }
    return(
        <Card title={<h2>Subscriber Prompt</h2>}>
            <Card title={
                <div className="home-title" style={{'fontSize':'24px'}}> 
                Browser Prompt    
                </div>
                    }
            style={{background:"#0D83DD",borderColor:'#0D83DD'}}
            bodyStyle={{background:"white",padding:0}}
            className="home-card"
            >

            <Col span={14} style={{padding:'20px'}}>Only show the native browser prompt to opt-in your store visitors.</Col> 

            {/* Timing Setup */}
            <Row style={{paddingTop:'20px'}}>
                <Col span={14}>
                    <Card title={<div style={{'color':'#0D83DD',fontSize:'24px'}}>Timing Setup</div>}
                    style={{background:"rgba(13, 131, 221, 0.25)"}}
                    bodyStyle={{background:"white"}}
                    bordered={false}
                    >
                        <Row className='greytext'>Set a timer according to when you want the browser prompt to be shown</Row>
                        <Row>
                            <Col span={12}>
                                <Card title="Desktop">
                                    <Row align='middle'>
                                        <Col style={{color: '#626262',fontSize:'14px',paddingRight:'10px'}}>Show after</Col>
                                        {/* timingsetup.desktop */}
                                        <InputNumber 
                                        onChange={(e)=>{
                                            let tmp = config
                                            tmp["timingsetup"]["desktop"]=e
                                            setConfig(tmp)
                                            console.log(tmp)
                                        }}  style={{'width':'200px'}} addonAfter="seconds" defaultValue={config.timingsetup.desktop} />
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card title="Mobile"
                                >
                                    <Row align='middle'>
                                        <Col style={{color: '#626262',fontSize:'14px',paddingRight:'10px'}}>Show after</Col>
                                        {/* timingsetup.mobile */}
                                        <InputNumber  onChange={(e)=>{
                                            let tmp = config
                                            tmp["timingsetup"]["mobile"]=e
                                            setConfig(tmp)
                                            console.log(tmp)
                                        }} style={{'width':'200px'}} addonAfter="seconds" defaultValue={config.timingsetup.mobile} />
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Card>    
                </Col>
            </Row>  

            {/* Intermediate custom prompt option     */}
            <Row>
                <Col span={14}>
                    <Card title={<div style={{'color':'#0D83DD',fontSize:'24px'}}>Intermediate custom prompt option</div>}
                    style={{background:"rgba(13, 131, 221, 0.25)"}}
                    bodyStyle={{background:"white"}}
                    bordered={false}
                    >
                        <Checkbox defaultChecked={config.intermediateprompt.show} onChange={onChangeCustomPrompt}><h1>Show a custom confirmation prompt</h1></Checkbox>
                        <Row className='greytext'>
                            Give your store visitors more context with a customizable opt-in dialog.
                        </Row>
                    </Card>
                </Col>
            </Row>
        {/* Render on check */}
        {customPrompt &&
            <div style={{'padding':'2px'}}>
                <Card bordered={false}>

                    <Col span={16}>
                        <h1>Title</h1>
                        <Input placeholder="Title" id="intermediateprompt" name="title" onChange={changeconfig}  className='configtext' style={{'width':'200px'}} /> 
                    </Col>  
                    <Col span={16} style={{'paddingTop':'15px'}}>
                        <h1>Description</h1>
                        <Input id="intermediateprompt" name="description" onChange={changeconfig} placeholder="Description" className='configtext' /> 
                    </Col>  

                    <Row  gutter={50} style={{'padding':'25px'}}>
                        <Card  title={<div className='prem-blue-text'> Button - Allow</div>}>
                            <Row>
                                <Col span={12}>
                                    <h1>Title</h1>
                                    <Input id="buttonAllow" name="title" onChange={changeconfig} placeholder="Allow" className='configtext' /> 
                                </Col> 
                            </Row>
                            <Row gutter={50}>
                                <Col span={12}>
                                    <h1>Background Color</h1>
                                    <Input id="buttonAllow" name="bgcolor" onChange={changeconfig} placeholder="#272727" className='configtext'/>   
                                </Col>
                                <Col span={12}>
                                    <h1>Text Color</h1>
                                    <Input id="buttonAllow" name="textcolor" onChange={changeconfig} placeholder="#AAAAAA" className='configtext' />   
                                </Col>
                            </Row>
                        </Card>
                        <Card  title={<div className='prem-blue-text'> Button - Later</div>}>
                            <Row>
                                <Col span={12}>
                                    <h1>Title</h1>
                                    <Input id="buttonLater" name="title" onChange={changeconfig} placeholder="Later" className='configtext' /> 
                                </Col> 
                            </Row>
                            <Row gutter={50}>
                                <Col span={12}>
                                    <h1>Background Color</h1>
                                    <Input id="buttonLater" name="bgcolor" onChange={changeconfig} placeholder="#272727" className='configtext'/>   
                                </Col>
                                <Col span={12}>
                                    <h1>Text Color</h1>
                                    <Input id="buttonLater" name="textcolor" onChange={changeconfig} placeholder="#AAAAAA" className='configtext' />   
                                </Col>
                            </Row>
                        </Card>
                    </Row>

               
   
            <Col span={15}>
                <div style={{'padding':'15px',fontSize:'24px',fontWeight:500}}>Opt-in timings</div>
                <Row style={{'padding':'10px'}} className='greytext'>
                Set a timer according to when you want the browser prompt to be shown
                </Row>
                <Row>
                            <Col span={12}>
                                <Card title="Desktop">
                                    <Row align='middle'>
                                        <Col style={{color: '#626262',fontSize:'14px',paddingRight:'10px'}}>Show after</Col>
                                        {/* optintimings.desktop */}
                                        <InputNumber 
                                        onChange={(e)=>{
                                            let tmp = config
                                            tmp["optintimings"]["desktop"]=e
                                            setConfig(tmp)
                                            console.log(config)
                                        }} style={{'width':'200px'}} addonAfter="seconds" defaultValue={config.optintimings.desktop} />
                                    </Row>
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card title="Mobile"
                                >
                                    <Row align='middle'>
                                        <Col style={{color: '#626262',fontSize:'14px',paddingRight:'10px'}}>Show after</Col>
                                        {/* optintimings.mobile */}
                                        <InputNumber
                                         onChange={(e)=>{
                                            let tmp = config
                                            tmp["optintimings"]["mobile"]=e
                                            setConfig(tmp)
                                            console.log(config)
                                        }} style={{'width':'200px'}} addonAfter="seconds" defaultValue={config.optintimings.mobile} />
                                    </Row>
                                </Card>
                            </Col>
                </Row>
                <Row style={{'paddingTop':'20px'}}>
                    <h1>Max prompt count session</h1>
                </Row>
                <Row>
                    <div className='greytext'>Show the prompt maximum
                    {/* optintimings.maxpromptcount */}
                    <InputNumber
                     onChange={(e)=>{
                        let tmp = config
                        tmp["optintimings"]["maxpromptcount"]=e
                        setConfig(tmp)
                        console.log(config)
                    }} className='configtext' style={{'width':'50px'}} defaultValue={config.optintimings.maxpromptcount} />
                    per session</div>
                </Row>
                <Row>
                <h1>Frequency</h1>
            </Row>
            <Row>
                <div className='greytext'>Hide the prompt for
                {/* optintimings.frequency */}
                <InputNumber
                onChange={(e)=>{
                    let tmp = config
                    tmp["optintimings"]["frequency"]=e
                    setConfig(tmp)
                    console.log(config)
                }} className='configtext' style={{'width':'50px'}} defaultValue={config.optintimings.frequency} />
                 days after it is shown to a visitor</div>
            </Row>
            </Col>
            </Card>
        </div>
        }
        {/* render on check end */}

        {/* Browser prompt overlay */}
        <Row>
                <Col span={14}>
                    <Card title={<div style={{'color':'#0D83DD',fontSize:'24px'}}>Browser prompt overlay </div>}
                    style={{background:"rgba(13, 131, 221, 0.25)"}}
                    bodyStyle={{background:"white"}}
                    bordered={false}
                    >
                        <Checkbox onChange={onChangeBrowserPrompt}><h1>Enable Overlay</h1></Checkbox>
                        <Row className='greytext'>
                        Use this overlay to show an attractive message to your visitors and urge them to subscribe.
                        </Row>
                    </Card>
                </Col>
        </Row>
        {/* FLYOUT WIDGET */}
        <Row>
            <Col span={24}>
                <Card>
                    <div style={{'fontSize':'24px','paddingBottom':'20px','paddingTop':'20px'}}>FLYOUT WIDGET</div>
                    <Row justify='center'>
                    {/* messages */}
                    <Col span={12} align='left' >
                        <Timeline size="" mode="left">
                            <Timeline.Item>
                                <div>
                                    <Row style={{'fontSize':'18px'}}>
                                        Message before user subscribes
                                    </Row>
                                    <Input
                                    onFocus={()=>{setWidgetText({before:widgetText.before,after:widgetText.after,button:widgetText.button,mode:true})}}
                                    value={widgetText.before} 
                                    onChange={(e)=>{setWidgetText({before:e.target.value,after:widgetText.after,button:widgetText.button,mode:widgetText.mode})}} 
                                    style={{'width':'70%'}} className='configtext'
                                    />
                                </div>
                            </Timeline.Item>
                            <Timeline.Item>
                                <div>
                                    <Row style={{'fontSize':'18px'}}>
                                        Message after user subscribe
                                    </Row>
                                    <Input
                                    onFocus={()=>{setWidgetText({before:widgetText.before,after:widgetText.after,button:widgetText.button,mode:false})}}
                                    value={widgetText.after} 
                                    onChange={(e)=>{setWidgetText({before:widgetText.before,after:e.target.value,button:widgetText.button,mode:widgetText.mode})}} 
                                    style={{'width':'70%'}} className='configtext'
                                    />
                                </div>
                            </Timeline.Item>
                            <Timeline.Item>
                                <div>
                                    <Row style={{'fontSize':'18px'}} >
                                        Button for subscribe
                                    </Row>
                                    <Input
                                    value={widgetText.button} 
                                    onChange={(e)=>{setWidgetText({before:widgetText.before,after:widgetText.after,button:e.target.value,mode:widgetText.mode})}}
                                    style={{'width':'25%'}} className='configtext'
                                    />
                                </div>
                            </Timeline.Item>
                        </Timeline>
                    </Col>
                    {/* preview */}
                    <Col span={12}>
                        <Card bordered={false}>
                        <div style={{'fontSize':'24px','paddingBottom':'20px','paddingTop':'20px'}}>FLYOUT WIDGET</div>

                            <Card bodyStyle={{'background':'#F8F8F8'}} className='home-card'>
                                <Row justify='center' gutter={40}>
                                    <Col span={17} align="middle">
                                        {widgetText.mode && widgetText.before}
                                        {widgetText.mode || widgetText.after} 
                                    </Col>
                                    <Col span={7} style={{'color':'#0D83DD',fontWeight:'500',cursor:'pointer'}}>
                                        {widgetText.button}
                                    </Col>
                                </Row>
                            </Card>
                        </Card>
                    </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        </Card>
        </Card>
    )
}
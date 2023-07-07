import React from 'react'
import './MyLayout.css'
import Layout from '@theme/Layout';
// import DefaultLayout from '@theme-original/Layout';
import { CodeFilled} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { SmileOutlined,EditOutlined,ForwardOutlined} from '@ant-design/icons';



export default function MyLayout() {
  return (
    <>
        
        <div className='layout'>
            <CodeFilled style= {{fontSize : '36px'}} />
            <div>避风港</div>
            <Link to="/docs/intro" className="layout_outfit">
                <SmileOutlined />自述
            </Link>
            <Link to="/docs/intro" className="layout_outfit">
                <EditOutlined />文章
            </Link>
            <Link to="/docs/intro" className="layout_outfit">
                <ForwardOutlined />生活
            </Link>
        </div>
        
    </>

  )
}

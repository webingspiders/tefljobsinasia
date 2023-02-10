import Header from '../widgets/Header'
import styles from '../styles/Contact.module.css'
import Footer from '../widgets/Footer'
import Container from '../widgets/Container'
import {useEffect, useState} from 'react'
import axios from 'axios'

export default function Blogs() {

  const [blogData, setBlogData] = useState([])

  useEffect(() => {

    fetchData()

  },[])

  const fetchData = async() => {
    const {data} = await axios.get('http://localhost:4000/api/v1/blogs')
    console.log(data.blogs)
    data.success && setBlogData(data.blogs)
  }


  return (
    <>
    <Header/>
    <Container main_class={styles.contact_us}>
        <h1>Blogs</h1>
    </Container>

    <Container>
      {blogData.map(blog => {
        return(
          <div key={blog._id} className={styles.blog}>
            <h2>{blog.title}</h2>
            <p>{blog.previewText}</p>
          </div>
        )
      })}
    </Container>
    <Footer/>
    </>
  )
}
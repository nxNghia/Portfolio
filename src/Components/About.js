import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import pictureOfme from './Images/picture1.jpg';
import { useState, useEffect } from 'react';

const About = ({lan}) => {
    //In my free time, I usually hang out with my friends or read famous novels. It helps me relax after hours of working. I also sharpen my thinking by do some exercise in Codeforces or Hackerrank, it has been my hobbit since my first year in university.
    const [about, setAbout] = useState([])
    const [engAbout, setEngAbout] = useState([{'id': 1, 'body': 'Call me Ghi-A if you find my name was difficult to pronounce. I am a third year student at Hanoi University of Science and Technology with a disire of making the world to become more comfortable by technology. I can speak in English conversationally and a little bit of Japanese. I have experience in front-end development with using ReactJS and Vue.js library.'}, {'id': 2, 'body': 'In my free time, I usually hang out with my friends or read famous novels. It helps me relax after hours of working. I also sharpen my thinking by do some exercise in Codeforces or Hackerrank, it has been my hobbit since my first year in university.'}])
    const [japAbout, setJapAbout] = useState([{'id': 1, 'body': 'はじめまして、私はグエン・スアン・ギアと申します。私はハノイ工科大学の三年生です。私の欲望はITで世界をもっと便利にすることです。私は英語と少しの日本語で会話できます。ITスキルにとって、私はReactJSの経験があります。それも、私は少しのVue.jsができます。'}, {'id': 2, 'body': '暇な時、私はよく友達と遊びに行ったり、有名な小説を読みます。そのことは私にいい感じを持ってくれます。それも、私はよくCodeforcesとHackerrankようなプラフォムで考え方を練習しています。その練習することは一年生から私の習慣になりました。'}])
    const style = {
        avatar: {
            width: 400,
            height: 400,
        },

        information: {
            fontSize: 30,
            paddingRight: 50,
        },

        container: {
            paddingBottom: 50,
            paddingTop: 20,
        },

        intro: {
            fontSize: 40,
            fontWeight: 'bold',
        }
    }

    useEffect(() => {
        fetchAbout()
    }, [lan])

    const fetchAbout = () => {
        let aboutFromServer;
        if(lan)
            // aboutFromServer = await fetch('http://localhost:5000/e_about')
            setAbout(engAbout)
        else
            // aboutFromServer = await fetch('http://localhost:5000/j_about')
            setAbout(japAbout)
        // const data = await aboutFromServer.json()
        // setAbout(data)
    }

    return (
        <Container style={style.container}>
            {lan ? <p style={style.intro}>About me</p> : <p style={style.intro}>私について</p>}
            <Grid container>
                <Grid item xs={8}>
                    {about.map((info) => (
                        <p key={info.id} style={style.information}>{info.body}</p>
                    ))}
                </Grid>
                <Grid>
                    <Avatar src={ pictureOfme } style={style.avatar}></Avatar>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About
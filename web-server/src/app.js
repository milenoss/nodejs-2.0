
const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve 

app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => { 
    res.render('index', { 
        title: 'Weather',
        name: 'Milen Khanal'
    })
})

app.get('/about', (req, res) => { 
    res.render('about', { 
        title: 'About me',
        name: 'Milen Khanal'
    })
    })

app.get('/help', (req, res) => { 
    res.render('help',{ 
       helpText:'This is some helpful text.', 
       title:'Help', 
       name:'Milen Khanal'
    })
})

app.get('/weather',(req, res) => { 
    res.send({
        forecast: 'It is cold',
        location: 'London'
    })
})


app.get('/help/*', (req, res) => { 
    res.render('404', { 
        title: '404', 
        name: 'Milen Khanal',
        errorMessage: 'Help article not found'

    })
})

app.get('*', (req, res) => { 
    res.render('404', { 
        title: '404', 
        name: 'Milen Khanal', 
        errorMessage: 'Page Not Found'
    })
})




app.listen(3000, ()=> { 
    console.log('Server is up on port 3000')
})
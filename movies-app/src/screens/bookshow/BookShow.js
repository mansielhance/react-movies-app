import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../../common/header/Header';
import Typography from '@material-ui/core/Typography';
import './BookShow.css';
import Home from '../home/Home';
import language from '../../common/language';
import location from '../../common/location';
import showDate from '../../common/showDate';
import showTime from '../../common/showTime';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class BookShow extends Component {

    constructor() {
        super();
        this.state = {
            location: "",
            language: ""
        }
    }

    backToDetailsHandler = () => {
        ReactDOM.render(<Home />, document.getElementById('root'));
    }

    locationChangeHandler = event => {
        this.setState({ location: event.target.value });
    }

    languageChangeHandler = event => {
        this.setState({ language: event.target.value });
    }

    showDateChangeHandler = event => {
        this.setState({ showDate: event.target.value });
    }

    showTimeChangeHandler = event => {
        this.setState({ showTime: event.target.value });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="bookShow">
                    <Typography className="back" onClick={this.backToDetailsHandler}>
                        &#60; Back to Movie Details
                    </Typography>


                    <Card className="cardStyle">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                BOOK SHOW
                            </Typography><br />

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="location">Choose Location:</InputLabel>
                                <Select
                                    value={this.state.location}
                                    onChange={this.locationChangeHandler}
                                >
                                    {location.map(loc => (
                                        <MenuItem key={"loc" + loc.id} value={loc.location}>
                                            {loc.location}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language">Choose Language:</InputLabel>
                                <Select
                                    value={this.state.language}
                                    onChange={this.languageChangeHandler}
                                >
                                    {language.map(lng => (
                                        <MenuItem key={"lng" + lng.id} value={lng.language}>
                                            {lng.language}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language">Choose Show Date:</InputLabel>
                                <Select
                                    value={this.state.showDate}
                                    onChange={this.showDateChangeHandler}
                                >
                                    {showDate.map(shdate => (
                                        <MenuItem key={"shdate" + shdate.id} value={shdate.showDate}>
                                            {shdate.showDate}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl required className="formControl">
                                <InputLabel htmlFor="language">Choose Show Time:</InputLabel>
                                <Select
                                    value={this.state.showTime}
                                    onChange={this.showTimeChangeHandler}
                                >
                                    {showTime.map(shtime => (
                                        <MenuItem key={"shdate" + shtime.id} value={shtime.showTime}>
                                            {shtime.showTime}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default BookShow; 
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ImgList from './Components/ImgList';
import SearchForm from './Components/SearchForm';


export default class App extends Component {
	constructor() {
		super();
		this.state = {
			imgs: [],
			loadingState: true
		};
	}

	componentDidMount() {
		this.performSearch();
	}

	

	performSearch = (query = '') => {
		axios
			.get(
				`https://api.unsplash.com/search/photos/?page=1&per_page=36&query=${query}&client_id=RtCFTCq_m7YVD-Yrer7qKZgAXlZ8I22epJAoOCiznx4`
			)
			.then(data => {
				this.setState({ imgs: data.data.results, loadingState: false });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	};

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">ImageSearch</h1>
						<SearchForm onSearch={this.performSearch} />
					</div>
				</div>
				
				<div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <ImgList data={this.state.imgs} />}
						
				</div>
				
			</div>
		);
	}
}

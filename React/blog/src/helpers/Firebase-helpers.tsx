import React from 'react';
import firebase, { firestore } from 'firebase';

import { IData } from './interface-helper';
import Item from '../components/Item';

let db: any;
let loadedData: IData[] = [];

const FireBaseInit = () => {
	let firebaseConfig = {
		apiKey: 'AIzaSyBthWSW9CZ2I8xS7nH9s4FkBuXs2C2KmUE',
		authDomain: 'blog-database-5a543.firebaseapp.com',
		databaseURL: 'https://blog-database-5a543.firebaseio.com',
		projectId: 'blog-database-5a543',
		storageBucket: 'blog-database-5a543.appspot.com',
		messagingSenderId: '537665165656',
		appId: '1:537665165656:web:362d05495126e4adc22d2d',
		measurementId: 'G-BZ91QMPNJ5',
	};

	firebase.initializeApp(firebaseConfig);
	firebase.analytics();
	db = firestore();
};

async function getFirebaseData(): Promise<IData[]> {
	await db
		.collection('posts')
		.get()
		.then((querry: any): void => {
			querry.forEach((doc: any) => {
				if (doc.exists) {
					loadedData.push({
						id: doc.data().id,
						author: doc.data().author,
						content: doc.data().content,
					});
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!');
				}
			});
		})
		.catch(function (error: any) {
			console.log('Error getting document:', error);
		});

	return loadedData;
}

async function getFirebaseDataDisplayable() {
	await db
		.collection('posts')
		.get()
		.then((querry: any): void => {
			querry.forEach((doc: any) => {
				if (doc.exists) {
					loadedData.push({
						id: doc.data().id,
						author: doc.data().author,
						content: doc.data().content,
					});
				} else {
					// doc.data() will be undefined in this case
					console.log('No such document!');
				}
			});
		})
		.catch(function (error: any) {
			console.log('Error getting document:', error);
		});

	let Items: any[] = [];
	loadedData.map((i: IData) => {
		return Items.push(<Item key={i.id} author={i.author} content={i.content} />); // return because of warning expected a return value in arrow function (it doesn't return anything)
	});

	return <React.Fragment>{Items}</React.Fragment>;
}

export { FireBaseInit, getFirebaseData, getFirebaseDataDisplayable };

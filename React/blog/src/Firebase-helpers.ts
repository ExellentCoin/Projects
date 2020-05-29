import firebase, { firestore } from 'firebase';
import { IData } from './interface-helper';

let db: any;

function FireBaseInit() {
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
}

async function getFirebaseData(): Promise<IData[]> {
	let loadedData: IData[] = [];
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

export { FireBaseInit, getFirebaseData };

import firebase from 'firebase';

const firebaseConfig = {
	apiKey: ' Confidential ',
	authDomain: 'Confidential',
	databaseURL: 'Confidential',
	projectId: 'Confidential',
	storageBucket: 'Confidential',
	messagingSenderId: 'Confidential',
	appId: 'Confidential',
	measurementId: 'Confidential',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();

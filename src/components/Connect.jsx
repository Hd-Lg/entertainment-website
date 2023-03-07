import { useState, useEffect } from 'react';
import { auth, db } from '../utils/firebase/firebase-config';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';

const Connect = () => {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [user, setUser] = useState(null);
	const [profile, setProfile] = useState(null);

	const createUser = async () => {
		let userCredential;
		try {
			userCredential = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log('User added to auth');
		} catch (error) {
			console.error(error);
		}

		try {
			let user = userCredential.user;
			user.displayName = displayName;
			let userDocRef = doc(db, 'users', user.uid);
			let userDocData = {
				uid: user.uid,
				email: registerEmail,
				displayName: user.displayName,
				createdAt: serverTimestamp(),
			};
			await setDoc(userDocRef, userDocData);
			console.log('Added user to document');
		} catch (error) {
			console.error(error);
		}
	};

	const loginUser = async () => {
		try {
			let userCredential = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			);
			let user = userCredential.user;
			if (user) {
				console.log('Logged in as : ', user);
				setUser(user);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const logoutUser = async () => {
		try {
			await signOut(auth);
			console.log('Sign out');
		} catch (error) {
			console.error(error);
		}
	};

	// Hook firebase auth to detect if a user is here or not
	useEffect(() => {
		if (auth) {
			let unsubscribe = onAuthStateChanged(auth, (user) => {
				console.log('onAuthStateChanged(): ', user);
				if (user) {
					setUser(user);
				}
			});
			return unsubscribe;
		}
	}, [auth]);

	// Hook firestore get the user's doc
	useEffect(() => {
		const listenToUserDoc = async (uid) => {
			try {
				let docRef = doc(db, 'users', uid);
				let unsubscribe = await onSnapshot(docRef, (docSnap) => {
					let profileData = docSnap.data();
					console.log('Got user profile: ', profileData, docSnap);

					if (!profileData) {
						console.log('No profile found');
						setProfile(profileData);
					}
				});
				return unsubscribe;
			} catch (error) {
				console.error(error);
			}
		};

		if (user?.uid) {
			listenToUserDoc(user.uid);
		}
	}, [user, db]);

	return (
		<div>
			<h2>Authentication</h2>
			<h3>Create account</h3>
			<div>
				<input
					type='text'
					placeholder='John Doe'
					onChange={(e) => setDisplayName(e.target.value)}
				/>
				<input
					type='email'
					placeholder='john.doe@example.com'
					onChange={(e) => setRegisterEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='*****'
					onChange={(e) => setRegisterPassword(e.target.value)}
				/>
				<button type='submit' onClick={createUser}>
					Create Account
				</button>
			</div>
			<h3>Login</h3>
			<div>
				<input
					type={'email'}
					placeholder='Email'
					onChange={(e) => setLoginEmail(e.target.value)}
				/>
				<input
					type={'password'}
					placeholder='Password'
					onChange={(e) => setLoginPassword(e.target.value)}
				/>
				<button type='submit' onClick={loginUser}>
					Login Account
				</button>
			</div>

			<div>
				<h3>Logout</h3>
				<button onClick={logoutUser}>Logout</button>
			</div>
		</div>
	);
};

export default Connect;

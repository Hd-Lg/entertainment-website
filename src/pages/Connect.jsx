import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { auth, db } from '../utils/firebase/firebase-config';

const Connect = () => {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
	const [displayName, setDisplayName] = useState('');
	const [profile, setProfile] = useState('');

	const user = auth.currentUser;
	console.log('user: ', user);

	const registerUser = async () => {
		let userCredential;
		try {
			userCredential = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			);
			console.log(userCredential);
		} catch (error) {
			console.error(error);
		}

		try {
			let user = userCredential.user;
			let userDocRef = doc(db, 'users', user.uid);
			let userDocData = {
				uid: user.uid,
				email: registerEmail,
				displayName,
				createdAt: serverTimestamp(),
			};
			await setDoc(userDocRef, userDocData);
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
				console.log(`Logged in as uid: ${user.uid}, email: ${user.email}`);
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

	// Hook Auth
	useEffect(() => {
		if (auth) {
			let unsubscribe = onAuthStateChanged(auth, (user) => {
				console.log('onAuthStateChanged(): ', user);
			});

			return unsubscribe;
		}
	}, [auth]);

	// Hook Firestore
	useEffect(() => {
		const listenToUserDoc = async (uid) => {
			try {
				let docRef = doc(db, 'users', uid);
				onSnapshot(docRef, (docSnap) => {
					let profileData = docSnap.data();
					console.log('Got user profile: ', profileData, docSnap);
					if (!profileData) {
						console.log('No profile found!');
					}
					setProfile(profileData);
				});
			} catch (error) {
				console.error(error);
			}
		};
		if (user?.uid) {
			listenToUserDoc(user.uid);
		}
	}, [db]);

	return (
		<div>
			<h2>Authentication</h2>
			<div>
				<h3>Create Account</h3>
				<input
					type='text'
					placeholder='Name'
					onChange={(e) => setDisplayName(e.target.value)}
				/>
				<input
					type='email'
					placeholder='email'
					onChange={(e) => setRegisterEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='password'
					onChange={(e) => setRegisterPassword(e.target.value)}
				/>
				<button type='submit' onClick={registerUser}>
					Create Account
				</button>
			</div>
			<div>
				<h3>Login</h3>
				<input
					type='email'
					placeholder='email'
					onChange={(e) => setLoginEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='password'
					onChange={(e) => setLoginPassword(e.target.value)}
				/>
				<button type='submit' onClick={loginUser}>
					Create Account
				</button>
			</div>
			<div>
				{profile ? (
					<>
						<h4>Profile from Firestore</h4>
						<p>{profile.displayName}</p>
						<p>{profile.email}</p>
						<p>{profile.uid}</p>
					</>
				) : (
					<>
						<p>No Profile</p>
					</>
				)}
			</div>
		</div>
	);
};

export default Connect;

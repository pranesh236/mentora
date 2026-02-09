import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db, firebaseReady } from '../firebase';
import { mentors as sampleMentors } from '../data/mentors';

export const createUserProfile = async (uid, payload) => {
  if (!firebaseReady || !db) return null;
  const ref = doc(db, 'users', uid);
  await setDoc(ref, { ...payload, createdAt: serverTimestamp() }, { merge: true });
};

export const upsertMentorProfile = async (uid, payload) => {
  if (!firebaseReady || !db) return null;
  const ref = doc(db, 'mentors', uid);
  await setDoc(ref, { ...payload, updatedAt: serverTimestamp() }, { merge: true });
};

export const upsertMenteeProfile = async (uid, payload) => {
  if (!firebaseReady || !db) return null;
  const ref = doc(db, 'mentees', uid);
  await setDoc(ref, { ...payload, updatedAt: serverTimestamp() }, { merge: true });
};

export const fetchMentors = async () => {
  if (!firebaseReady || !db) return sampleMentors;
  const snapshot = await getDocs(collection(db, 'mentors'));
  return snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
};

export const seedMentorsIfEmpty = async () => {
  if (!firebaseReady || !db) return false;
  const existing = await getDocs(query(collection(db, 'mentors'), limit(1)));
  if (!existing.empty) return false;

  const batch = sampleMentors.map((mentor) =>
    addDoc(collection(db, 'mentors'), {
      ...mentor,
      createdAt: serverTimestamp(),
    })
  );

  await Promise.all(batch);
  return true;
};

export const createMentorRequest = async ({ mentorId, menteeId, title }) => {
  if (!firebaseReady || !db) return null;
  const payload = {
    mentorId,
    menteeId,
    title,
    status: 'In review',
    createdAt: serverTimestamp(),
  };
  const docRef = await addDoc(collection(db, 'mentorRequests'), payload);
  return docRef.id;
};

export const fetchMenteeRequests = async (menteeId) => {
  if (!menteeId) return [];
  if (!firebaseReady || !db) return [];
  const snapshot = await getDocs(
    query(collection(db, 'mentorRequests'), where('menteeId', '==', menteeId))
  );
  return snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
};

export const fetchMentorRequests = async (mentorId) => {
  if (!mentorId) return [];
  if (!firebaseReady || !db) return [];
  const snapshot = await getDocs(
    query(collection(db, 'mentorRequests'), where('mentorId', '==', mentorId))
  );
  return snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
};

export const updateRequestStatus = async (requestId, status) => {
  if (!firebaseReady || !db) return null;
  const ref = doc(db, 'mentorRequests', requestId);
  await updateDoc(ref, { status, updatedAt: serverTimestamp() });
};

export const getUserProfile = async (uid) => {
  if (!uid) return null;
  if (!firebaseReady || !db) return null;
  const ref = doc(db, 'users', uid);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? snapshot.data() : null;
};

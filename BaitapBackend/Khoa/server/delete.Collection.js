async function deleteCollection(db, collectionPath, batchsize) {
	const collectionRef = db.collectionGroup(collectionPath);
	const query = collectionRef.orderBy("__name__").limit(batchsize);
}
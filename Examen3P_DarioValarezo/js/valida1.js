function validaEmpty(postData) {
    return postData['name'] != '' && postData['email'] != '' && postData['cedula'] != '';
}
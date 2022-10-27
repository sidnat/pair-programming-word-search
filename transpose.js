const transpose = function(matrix) {
  let outputMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) { // loops through index positions (columns)
    let temp = [];
    
    for (let j = 0; j < matrix.length; j++) { // loops through each nested array (rows)
      temp.push(matrix[j][i]);
    }
    
    outputMatrix.push(temp); // outputs temp array to nested array position
  }
  return outputMatrix;
};

module.exports = {
  transpose,
}
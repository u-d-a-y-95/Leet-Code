var islandPerimeter = function(grid) {
    let perimeter = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == 1) {
          if (j == 0 || grid[i][j - 1] == 0) {
            perimeter += 1
          }
          if (i == 0 || grid[i - 1][j] == 0) {
            perimeter += 1
          }
          if (j == grid[i].length - 1 || grid[i][j + 1] == 0) {
            perimeter += 1
          }
          if (i == grid.length - 1 || grid[i + 1][j] == 0) {
            perimeter += 1
          }
        }
      }
    }
    return perimeter
  };
  
  
  console.log(islandPerimeter(
    [
      [0, 1, 0, 0], 
      [1, 1, 1, 0], 
      [0, 1, 0, 0], 
      [1, 1, 0, 0]
    ])
  )
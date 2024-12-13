#include <iostream>
#include <vector>
using namespace std;

int prodSubMat(vector<vector<int> > matA, int maxK) {
    int rows = matA.size();
    int cols = matA[0].size();
    int answer = 0;

    // Iterate over all submatrices starting from the top-left corner (0, 0)
    for (int endRow = 0; endRow < rows; endRow++) {
        for (int endCol = 0; endCol < cols; endCol++) {
            long long product = 1;
            
            // Calculate the product of the submatrix from (0, 0) to (endRow, endCol)
            for (int i = 0; i <= endRow; i++) {
                for (int j = 0; j <= endCol; j++) {
                    product *= matA[i][j];
                    // If product exceeds maxK, no need to continue for this submatrix
                    if (product > maxK) {
                        break;
                    }
                }
                if (product > maxK) {
                    break;
                }
            }

            // If the product is valid (<= maxK), count the submatrix
            if (product <= maxK) {
                answer++;
            }
        }
    }

    return answer;
}

int main() {
    // Input for matA
    int matA_row, matA_col;
    cin >> matA_row >> matA_col;
    
    vector<vector<int> > matA(matA_row, vector<int>(matA_col));
    
    for (int i = 0; i < matA_row; i++) {
        for (int j = 0; j < matA_col; j++) {
            cin >> matA[i][j];
        }
    }

    // Input for maxK
    int maxK;
    cin >> maxK;

    // Get the result
    int result = prodSubMat(matA, maxK);

    // Output the result
    cout << result << endl;

    return 0;
}

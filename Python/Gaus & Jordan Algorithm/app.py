A = [[ 1,  1,  1,  1],
     [ 1, -1,  3, -4],
     [ 2,  3, -1, -1]]

rows = len(A)
collumns = len(A[0])

# Check if the spil is equal to 0 and if so swap it
if A[0][0] == 0:
    first = A[0]
    del A[0]
    A.append(first)

i = 0
j = 0
A[(i + 1) % rows][j] = 0
A[(i + 2) % rows][j] = 0
print(A)
# O(n4)
n = 1000
# for a in range(n):
#     for b in range(n):
#         for c in range(n):
#             for d in range(n):
#                 if a**3 + b**3 == c**3 + d**3:
#                     print(a, b, c, d)

# O(n3)
for a in range(n):
    for b in range(n):
        for c in range(n):
            d = pow(a**3 + b**3 - c**3, 1/3)
            if a**3 + b**3 == c**3 + d**3:
                print(a, b, c, d)

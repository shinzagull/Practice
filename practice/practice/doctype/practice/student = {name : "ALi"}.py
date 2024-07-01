student = {name : "ALi"}



student.name


doc = {cnic : '3690465978'}


[{row1},{row2},{row3}]


a = [1, 2, 43, 4, {name : "abc"} , 78]


for x in a:
    if(type(x) == 'dict'):
        print(x.name)
    else: 
        print(x)
1
2
43
4
name : abc
78
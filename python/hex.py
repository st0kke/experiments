def hex_output(hex_num):
    result = 0
    convs = {'a':10, 'b':11, 'c':12, 'd':13, 'e':14, 'f':15}


    for index,h in enumerate(reversed(hex_num)):
        if convs[h]:
            h = convs[h]
        val = (16**index * h)
        print(f'(16^{index} * {h}) = {val}')
        result = result + val

    print(f'0x{hex_num} converted to decimal is {result}')    



hex_output('def')
hex_output('f')

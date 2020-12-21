def hex_output(hex_num):
    print(f'Converting 0x{hex_num} to decimal:')    
    result = 0
    try:
      for power,hex_char in enumerate(reversed(hex_num)):
        val = (16 ** power) * int(hex_char, 16)
        print(f'\t(16^{power} * {int(hex_char, 16)}) = {val}')
        result = result + val
    except ValueError as e:
        print(f'\t{e}')
    else:
      print(f'\tResult is {result}')    


hex_output('def')
hex_output('g')

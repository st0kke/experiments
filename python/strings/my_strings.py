def pig_latin(input_word):
    if input_word[0] in ('a', 'e', 'i', 'o', 'u'):
        translation = input_word + 'way'
    else:
        translation = input_word[1:] + input_word[0] + 'ay'
    
    return translation




def pig_latin(word):
    if word[0].lower() in 'aeiou':
        translation = f'{word}way'
    else:
        translation = word[1:] + word[0] + 'ay'
        if word[0].isupper():
            translation = translation.capitalize()
            
    return translation




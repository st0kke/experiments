from my_strings import *
from unittest import TestCase, main

class TestString(TestCase):

    def test_starts_with_consenant(self):
        translation = pig_latin('python')
        self.assertEqual('ythonpay', translation, "is ythonpay")

    def test_starts_withvowel(self):
        translation = pig_latin('air')
        self.assertEqual('airway', translation, "is airway")

    
if __name__ == '__main__':
   main()

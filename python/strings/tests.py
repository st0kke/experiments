from my_strings import *
from unittest import TestCase, main

class TestString(TestCase):

    def test_starts_with_consenant(self):
        translation = pig_latin('python')
        self.assertEqual('ythonpay', translation, "is ythonpay")

    def test_starts_withvowel(self):
        translation = pig_latin('air')
        self.assertEqual('airway', translation, "is airway")
    
    def test_starts_with_consenant_upper(self):
        translation = pig_latin('Python')
        self.assertEqual('Ythonpay', translation, "is ythonpay upper")
    
    def test_starts_withvowel_upper(self):
        translation = pig_latin('Air')
        self.assertEqual('Airway', translation, "is airway upper")

if __name__ == '__main__':
   main()

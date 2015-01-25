#!/usr/bin/env python
import Image
from random import randint, choice

root = "resources/public/img/sprites/component-tree-"

types = ["brown", "light", "dark"] # 4

trunks = 2

# creates a new empty image, RGB mode, and size 400 by 400.
out = Image.new('RGBA', (200,300))

trunknum = randint(0, 2)
trunk = trunknum and Image.open(root + "trunk-" + str(trunknum) + ".png") or None

if trunk:
	out.paste(trunk, (100 - (trunk.getbbox()[2] / 2), 300 - trunk.getbbox()[3]))
	base = trunk.getbbox()[3] - 20
else:
	base = 0

for x in range(randint(3, 7)):
	bush = Image.open(root + "shrub-" + choice(types) + "-" + str(randint(1, 4)) + ".png")
	# out.paste(bush, (100 - (bush.getbbox()[2] / 2), 300 - base))
	# out = Image.alpha_composite(out, bush)

#opens an image:
# im = Image.open("1_tree.jpg")

#Here I resize my opened image, so it is no bigger than 100,100
# im.thumbnail((100,100))
#Iterate through a 4 by 4 grid with 100 spacing, to place my image
#for i in xrange(0,500,100):
#    for j in xrange(0,500,100):
#        #I change brightness of the images, just to emphasise they are unique copies.
#        im=Image.eval(im,lambda x: x+(i+j)/30)
#        #paste the image at location i,j:
#        new_im.paste(im, (i,j))

# out.show()
out.save("tree.png")

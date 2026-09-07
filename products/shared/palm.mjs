/**
 * palm.mjs — the shared drawing vocabulary for every Palmistry Path diagram.
 *
 * One wireframe hand (gold contour on black, violet haze, hatched palm), one
 * set of landmarks (major lines, minor lines, mounts, creases), and a small
 * kit of annotation tools (leaders, labels, glow lines, chains, islands,
 * specimen panels). Every plate series — mounts, lines, fingers, hand shapes —
 * draws from this file so the whole site reads as one atlas.
 *
 * Coordinates are "hand space": a 1000×1080 canvas with the hand group
 * translated 40px right. Helpers that place hands elsewhere (compare plates)
 * wrap the same hand-space drawing in a transform.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export const W = 1000;
export const H = 1080;

export const GOLD = '#c9a96e';
export const GOLD_LIGHT = '#e0c07e';
export const GOLD_BRIGHT = '#f0cf86';
export const BG = '#07050d';
export const INK = '#8c84a8';
export const VIOLET = '#8a5cf0';
export const FONT = "Cinzel, 'Times New Roman', Georgia, serif";

// Engraved shading for the hand body, embedded once per plate.
const TEXTURE = 'data:image/jpeg;base64,' + readFileSync(new URL('./hand-texture.jpg', import.meta.url)).toString('base64');

// Left hand, palm up, thumb on the left. Traced from the engraved reference
// hand in products/shared/hand-texture.jpg (see docs/product-suite.md), which
// is the same image that shades the hand body. Plates authored against the
// previous schematic hand are carried across with remap().
export const HAND = 'M 483.2 100.4 C 479.6 100.9 475.9 102.0 472.7 103.7 C 469.6 105.4 466.6 107.8 464.2 110.5 C 461.8 113.2 459.9 116.5 458.4 119.9 C 456.9 123.2 456.1 126.8 455.4 130.4 C 454.6 134.0 454.4 137.7 454.0 141.4 C 453.7 145.0 453.5 148.7 453.3 152.4 C 453.1 156.0 452.8 159.7 452.6 163.3 C 452.5 167.0 452.6 170.7 452.4 174.4 C 452.3 178.0 452.1 181.7 452.0 185.4 C 451.9 189.0 452.0 192.7 452.0 196.4 C 452.0 200.1 452.0 203.7 452.0 207.4 C 452.0 211.1 452.0 214.8 452.0 218.4 C 452.0 222.1 452.0 225.8 451.9 229.4 C 451.8 233.1 451.6 236.8 451.4 240.5 C 451.2 244.1 451.2 247.8 451.0 251.5 C 450.9 255.1 450.8 258.8 450.6 262.5 C 450.5 266.1 450.4 269.8 450.2 273.5 C 450.0 277.2 449.9 280.8 449.7 284.5 C 449.5 288.2 449.4 291.8 449.2 295.5 C 449.0 299.2 448.7 302.8 448.5 306.5 C 448.3 310.2 448.0 313.8 447.8 317.5 C 447.6 321.2 447.3 324.8 447.2 328.5 C 447.1 332.2 447.1 335.8 447.2 339.5 C 447.3 343.2 447.6 346.8 447.8 350.5 C 448.0 354.2 448.2 357.8 448.5 361.5 C 448.7 365.2 448.8 368.8 449.0 372.5 C 449.2 376.2 449.4 379.8 449.6 383.5 C 449.8 387.2 449.9 390.9 450.0 394.5 C 450.1 398.2 450.2 401.9 450.4 405.5 C 450.6 409.2 450.8 412.9 451.0 416.5 C 451.2 420.2 451.4 423.9 451.6 427.5 C 451.8 431.2 452.0 434.9 452.2 438.5 C 452.4 442.2 452.5 445.9 452.6 449.6 C 452.7 453.2 452.8 456.9 452.6 460.6 C 452.4 464.2 452.8 468.4 451.3 471.5 C 449.9 474.6 447.0 478.0 444.0 479.2 C 441.0 480.3 436.2 479.9 433.3 478.3 C 430.5 476.7 428.4 472.9 426.9 469.7 C 425.3 466.4 424.9 462.6 424.1 459.0 C 423.3 455.4 422.7 451.8 422.0 448.2 C 421.3 444.6 420.7 441.0 420.0 437.4 C 419.4 433.7 418.7 430.1 418.1 426.5 C 417.4 422.9 416.7 419.3 416.1 415.7 C 415.4 412.1 414.8 408.4 414.1 404.8 C 413.5 401.2 412.8 397.6 412.1 394.0 C 411.5 390.4 410.8 386.8 410.2 383.2 C 409.5 379.5 408.9 375.9 408.3 372.3 C 407.7 368.7 407.2 365.0 406.6 361.4 C 406.0 357.8 405.4 354.2 404.7 350.6 C 404.1 346.9 403.3 343.3 402.6 339.8 C 401.8 336.2 401.0 332.6 400.3 329.0 C 399.5 325.4 398.8 321.8 398.1 318.2 C 397.3 314.6 396.6 311.0 395.9 307.4 C 395.2 303.8 394.6 300.2 393.9 296.5 C 393.3 292.9 392.7 289.3 392.1 285.7 C 391.5 282.0 390.9 278.4 390.3 274.8 C 389.7 271.2 389.2 267.5 388.7 263.9 C 388.3 260.3 387.9 256.6 387.5 252.9 C 387.1 249.3 386.7 245.6 386.4 242.0 C 386.0 238.3 385.6 234.7 385.2 231.0 C 384.8 227.4 384.4 223.7 383.9 220.1 C 383.5 216.4 383.1 212.8 382.6 209.1 C 382.2 205.5 381.8 201.9 381.3 198.2 C 380.8 194.6 380.4 190.9 379.7 187.3 C 379.0 183.7 378.3 180.1 377.3 176.6 C 376.3 173.0 375.3 169.4 373.6 166.2 C 371.9 163.0 369.8 159.7 367.2 157.3 C 364.6 154.9 361.3 152.8 357.9 151.6 C 354.5 150.4 350.6 149.8 347.1 150.1 C 343.5 150.3 339.7 151.4 336.5 153.0 C 333.3 154.5 330.1 156.8 327.7 159.4 C 325.2 162.1 323.2 165.4 321.7 168.7 C 320.2 171.9 319.2 175.6 318.4 179.1 C 317.7 182.7 317.4 186.4 317.1 190.1 C 316.8 193.7 316.6 197.4 316.5 201.1 C 316.4 204.7 316.4 208.4 316.4 212.1 C 316.4 215.8 316.3 219.4 316.4 223.1 C 316.5 226.8 316.8 230.5 317.0 234.1 C 317.1 237.8 317.2 241.5 317.3 245.1 C 317.5 248.8 317.7 252.5 318.0 256.1 C 318.3 259.8 318.7 263.4 318.9 267.1 C 319.1 270.8 319.2 274.4 319.4 278.1 C 319.6 281.8 319.8 285.5 320.0 289.1 C 320.2 292.8 320.3 296.5 320.5 300.1 C 320.7 303.8 321.0 307.5 321.1 311.1 C 321.3 314.8 321.1 318.5 321.2 322.1 C 321.3 325.8 321.5 329.5 321.6 333.2 C 321.7 336.8 321.7 340.5 321.8 344.2 C 321.9 347.8 322.1 351.5 322.3 355.2 C 322.5 358.8 322.7 362.5 323.1 366.2 C 323.5 369.8 324.1 373.4 324.7 377.1 C 325.3 380.7 325.9 384.3 326.5 387.9 C 327.1 391.6 327.7 395.2 328.3 398.8 C 328.8 402.4 329.4 406.1 329.9 409.7 C 330.4 413.3 331.0 417.0 331.5 420.6 C 332.0 424.2 332.6 427.9 333.1 431.5 C 333.6 435.2 334.0 438.8 334.5 442.4 C 335.0 446.1 335.6 449.7 336.1 453.3 C 336.6 457.0 337.1 460.6 337.5 464.3 C 338.0 467.9 338.5 471.5 338.9 475.2 C 339.3 478.8 339.8 482.5 340.1 486.1 C 340.4 489.8 340.7 493.5 340.9 497.1 C 341.0 500.8 341.0 504.5 340.9 508.1 C 340.8 511.8 340.5 515.5 340.3 519.2 C 340.1 522.8 339.9 526.5 339.7 530.2 C 339.6 533.8 339.4 537.5 339.2 541.2 C 339.0 544.8 338.8 548.5 338.6 552.2 C 338.5 555.8 338.2 559.5 338.1 563.2 C 338.0 566.8 337.9 570.5 337.8 574.2 C 337.7 577.9 337.5 581.5 337.4 585.2 C 337.3 588.9 337.5 592.5 337.4 596.2 C 337.3 599.9 337.1 603.6 336.9 607.2 C 336.6 610.9 336.4 614.5 336.1 618.2 C 335.8 621.9 335.5 625.5 335.1 629.2 C 334.8 632.8 334.4 636.5 333.9 640.1 C 333.4 643.8 332.9 647.4 332.1 651.0 C 331.3 654.6 330.5 658.2 329.1 661.6 C 327.8 665.0 326.4 669.0 323.9 671.2 C 321.3 673.4 317.3 674.5 313.8 674.6 C 310.4 674.7 306.6 673.1 303.2 671.8 C 299.9 670.4 296.6 668.5 293.6 666.4 C 290.7 664.2 287.9 661.7 285.4 659.0 C 282.9 656.4 280.7 653.4 278.6 650.4 C 276.4 647.5 274.4 644.4 272.3 641.3 C 270.3 638.3 268.4 635.1 266.5 632.0 C 264.6 628.9 262.7 625.7 261.0 622.5 C 259.2 619.3 257.6 616.0 255.8 612.7 C 254.1 609.5 252.1 606.4 250.5 603.1 C 249.0 599.8 247.7 596.3 246.3 592.9 C 244.9 589.5 243.5 586.1 242.0 582.8 C 240.4 579.5 238.7 576.2 236.8 573.0 C 235.0 569.9 233.0 566.8 231.0 563.7 C 228.9 560.6 226.9 557.6 224.7 554.7 C 222.5 551.7 220.1 548.9 217.8 546.1 C 215.4 543.3 213.0 540.5 210.5 537.8 C 207.9 535.2 205.3 532.6 202.6 530.1 C 199.9 527.6 197.1 525.2 194.2 523.0 C 191.3 520.7 188.3 518.6 185.2 516.6 C 182.1 514.7 178.9 512.8 175.6 511.3 C 172.2 509.8 168.7 508.5 165.2 507.7 C 161.6 507.0 157.8 506.7 154.2 506.9 C 150.6 507.1 146.8 507.7 143.5 509.0 C 140.1 510.2 136.7 512.1 134.0 514.5 C 131.2 516.8 128.5 519.7 127.0 522.9 C 125.5 526.1 124.5 530.1 124.8 533.5 C 125.1 537.0 127.2 540.5 128.6 543.8 C 130.1 547.1 131.9 550.4 133.7 553.6 C 135.5 556.8 137.4 559.9 139.2 563.1 C 141.0 566.3 142.8 569.5 144.6 572.7 C 146.4 575.9 148.3 579.1 150.0 582.4 C 151.7 585.6 153.3 588.9 154.9 592.2 C 156.5 595.5 158.1 598.8 159.5 602.2 C 161.0 605.6 162.3 609.0 163.6 612.4 C 165.0 615.8 166.3 619.3 167.6 622.7 C 169.0 626.1 170.2 629.6 171.7 632.9 C 173.1 636.3 174.7 639.6 176.4 642.9 C 178.1 646.1 180.0 649.3 181.8 652.5 C 183.7 655.7 185.6 658.8 187.4 662.0 C 189.2 665.2 191.0 668.4 192.7 671.7 C 194.4 674.9 196.1 678.2 197.8 681.4 C 199.4 684.7 201.1 688.0 202.7 691.3 C 204.3 694.6 205.8 698.0 207.3 701.3 C 208.7 704.7 210.1 708.1 211.4 711.5 C 212.7 715.0 214.0 718.4 215.1 721.9 C 216.2 725.4 217.3 728.9 218.3 732.5 C 219.2 736.0 220.0 739.6 220.8 743.2 C 221.7 746.8 222.4 750.3 223.3 753.9 C 224.2 757.5 225.1 761.1 226.2 764.5 C 227.4 768.0 228.7 771.5 230.2 774.8 C 231.7 778.1 233.5 781.4 235.3 784.6 C 237.2 787.7 239.2 790.8 241.3 793.8 C 243.4 796.8 245.7 799.7 248.0 802.6 C 250.2 805.5 252.6 808.3 254.8 811.2 C 257.1 814.1 259.4 817.0 261.6 819.9 C 263.8 822.8 266.0 825.8 268.2 828.7 C 270.4 831.7 272.6 834.6 274.8 837.6 C 276.9 840.5 279.0 843.6 281.1 846.6 C 283.2 849.6 285.3 852.6 287.4 855.6 C 289.5 858.7 291.5 861.7 293.6 864.7 C 295.7 867.8 297.7 870.8 299.8 873.8 C 301.9 876.8 304.0 879.9 306.1 882.9 C 308.2 885.9 310.3 888.9 312.5 891.9 C 314.7 894.8 316.9 897.8 319.2 900.6 C 321.5 903.5 323.9 906.3 326.4 909.0 C 328.9 911.7 331.4 914.3 334.1 916.8 C 336.8 919.4 339.6 921.7 342.3 924.2 C 345.0 926.6 347.9 929.0 350.4 931.6 C 353.0 934.2 355.4 937.0 357.6 940.0 C 359.8 942.9 361.7 946.1 363.4 949.3 C 365.2 952.5 366.7 955.9 368.0 959.3 C 369.4 962.7 370.5 966.2 371.4 969.8 C 372.4 973.3 372.8 977.1 373.9 980.5 C 375.1 983.9 376.2 987.7 378.5 990.3 C 380.9 992.9 384.6 994.4 388.0 995.9 C 391.3 997.4 394.9 998.4 398.4 999.4 C 401.9 1000.4 405.5 1001.3 409.1 1002.0 C 412.7 1002.8 416.3 1003.5 419.9 1004.1 C 423.5 1004.7 427.2 1005.3 430.8 1005.8 C 434.4 1006.3 438.1 1006.8 441.7 1007.2 C 445.4 1007.6 449.0 1007.9 452.7 1008.3 C 456.3 1008.6 460.0 1008.9 463.7 1009.2 C 467.3 1009.5 471.0 1009.6 474.7 1009.8 C 478.3 1010.0 482.0 1010.0 485.7 1010.2 C 489.3 1010.4 493.0 1010.6 496.7 1010.7 C 500.4 1010.8 504.0 1010.8 507.7 1010.8 C 511.4 1010.8 515.1 1010.9 518.7 1010.8 C 522.4 1010.7 526.1 1010.4 529.7 1010.3 C 533.4 1010.2 537.1 1010.1 540.7 1010.0 C 544.4 1009.8 548.1 1009.6 551.7 1009.4 C 555.4 1009.1 559.1 1008.9 562.7 1008.6 C 566.4 1008.3 570.0 1007.9 573.7 1007.5 C 577.3 1007.1 581.0 1006.7 584.6 1006.2 C 588.3 1005.7 591.9 1005.2 595.5 1004.7 C 599.2 1004.1 602.8 1003.4 606.4 1002.7 C 610.0 1002.0 613.6 1001.2 617.1 1000.3 C 620.7 999.3 624.2 998.3 627.7 997.0 C 631.1 995.7 634.8 994.5 637.6 992.3 C 640.3 990.1 642.6 987.0 644.1 983.7 C 645.7 980.5 645.8 976.6 646.7 973.0 C 647.6 969.5 648.7 965.9 649.8 962.5 C 650.9 959.0 652.2 955.5 653.5 952.1 C 654.8 948.7 656.3 945.3 657.8 941.9 C 659.3 938.6 661.0 935.3 662.6 932.0 C 664.3 928.8 666.1 925.5 667.8 922.3 C 669.6 919.1 671.4 915.9 673.2 912.7 C 675.0 909.5 676.8 906.3 678.5 903.0 C 680.2 899.8 681.8 896.5 683.4 893.2 C 685.1 889.9 686.7 886.6 688.2 883.3 C 689.8 879.9 691.2 876.5 692.5 873.1 C 693.9 869.7 695.2 866.3 696.4 862.8 C 697.7 859.4 698.9 855.9 700.0 852.4 C 701.1 848.9 702.3 845.4 703.3 841.9 C 704.3 838.3 705.2 834.8 706.1 831.2 C 707.0 827.7 707.8 824.1 708.6 820.5 C 709.4 816.9 710.2 813.3 710.9 809.7 C 711.6 806.1 712.2 802.5 712.9 798.9 C 713.5 795.3 714.2 791.7 714.8 788.0 C 715.4 784.4 715.9 780.8 716.4 777.1 C 716.9 773.5 717.4 769.9 717.8 766.2 C 718.3 762.6 718.6 758.9 719.1 755.3 C 719.5 751.6 719.9 748.0 720.3 744.3 C 720.7 740.7 721.0 737.0 721.3 733.3 C 721.6 729.7 722.0 726.0 722.4 722.4 C 722.7 718.7 723.1 715.1 723.4 711.4 C 723.7 707.8 723.9 704.1 724.2 700.4 C 724.5 696.8 724.9 693.1 725.2 689.4 C 725.5 685.8 725.7 682.1 725.9 678.5 C 726.2 674.8 726.4 671.1 726.7 667.5 C 726.9 663.8 727.1 660.1 727.4 656.5 C 727.6 652.8 727.8 649.1 728.0 645.5 C 728.1 641.8 728.4 638.1 728.4 634.5 C 728.5 630.8 728.4 627.1 728.3 623.5 C 728.2 619.8 728.1 616.1 728.0 612.4 C 727.9 608.8 728.1 605.1 728.0 601.4 C 727.9 597.7 727.6 594.1 727.4 590.4 C 727.2 586.7 726.9 583.1 726.7 579.4 C 726.5 575.8 726.3 572.1 726.2 568.4 C 726.1 564.7 726.0 561.1 726.2 557.4 C 726.4 553.7 726.8 550.1 727.3 546.4 C 727.8 542.8 728.4 539.2 729.0 535.5 C 729.5 531.9 730.1 528.3 730.8 524.7 C 731.4 521.1 732.1 517.5 732.7 513.8 C 733.4 510.2 734.0 506.6 734.6 503.0 C 735.2 499.4 735.8 495.7 736.5 492.1 C 737.1 488.5 737.8 484.9 738.5 481.3 C 739.2 477.7 739.9 474.1 740.5 470.5 C 741.0 466.8 741.6 463.2 742.0 459.5 C 742.4 455.9 742.7 452.2 743.1 448.6 C 743.4 444.9 743.8 441.3 744.1 437.6 C 744.4 434.0 744.8 430.3 745.1 426.6 C 745.5 423.0 745.8 419.3 746.2 415.7 C 746.6 412.0 746.9 408.4 747.4 404.7 C 747.8 401.1 748.5 397.5 748.9 393.8 C 749.3 390.2 749.4 386.5 749.6 382.8 C 749.8 379.1 750.0 375.5 750.1 371.8 C 750.3 368.1 750.2 364.5 750.3 360.8 C 750.4 357.1 750.7 353.5 750.8 349.8 C 750.9 346.1 750.9 342.4 750.8 338.8 C 750.7 335.1 750.6 331.4 750.2 327.8 C 749.9 324.1 749.5 320.4 748.7 316.9 C 747.9 313.3 747.0 309.6 745.4 306.4 C 743.7 303.2 741.6 299.9 738.9 297.6 C 736.2 295.3 732.5 293.5 729.1 292.8 C 725.6 292.0 721.6 292.0 718.2 292.9 C 714.8 293.8 711.3 295.9 708.6 298.2 C 706.0 300.6 703.8 303.9 702.2 307.1 C 700.5 310.3 699.6 313.9 698.7 317.5 C 697.8 321.0 697.3 324.7 696.8 328.3 C 696.3 332.0 696.0 335.6 695.6 339.3 C 695.2 343.0 694.9 346.6 694.5 350.3 C 694.1 353.9 693.8 357.6 693.4 361.2 C 693.0 364.9 692.6 368.5 692.2 372.2 C 691.7 375.8 691.3 379.5 690.8 383.1 C 690.3 386.7 689.8 390.4 689.2 394.0 C 688.6 397.6 687.9 401.2 687.2 404.8 C 686.4 408.4 685.6 412.0 684.7 415.6 C 683.9 419.1 682.9 422.7 681.9 426.2 C 681.0 429.8 680.1 433.3 679.0 436.9 C 678.0 440.4 676.9 443.9 675.9 447.4 C 674.8 450.9 673.8 454.5 672.9 458.0 C 672.1 461.6 671.3 465.2 670.6 468.8 C 669.8 472.4 669.1 476.0 668.3 479.6 C 667.6 483.2 666.8 486.8 666.1 490.4 C 665.3 494.0 664.5 497.6 663.8 501.1 C 663.0 504.7 662.3 508.3 661.4 511.9 C 660.5 515.5 660.0 519.4 658.4 522.5 C 656.8 525.7 654.5 529.8 651.7 530.7 C 648.9 531.6 644.3 529.9 641.6 528.0 C 638.9 526.0 637.0 522.1 635.7 518.8 C 634.5 515.4 634.3 511.6 634.0 507.9 C 633.7 504.3 633.9 500.6 634.0 496.9 C 634.1 493.2 634.4 489.6 634.7 485.9 C 635.0 482.3 635.4 478.6 635.8 474.9 C 636.1 471.3 636.5 467.6 636.9 464.0 C 637.3 460.3 637.7 456.7 638.1 453.0 C 638.4 449.4 638.8 445.7 639.2 442.1 C 639.5 438.4 639.9 434.8 640.2 431.1 C 640.6 427.4 641.0 423.8 641.3 420.1 C 641.7 416.5 642.1 412.8 642.4 409.2 C 642.8 405.5 643.2 401.9 643.5 398.2 C 643.9 394.6 644.3 390.9 644.6 387.2 C 644.8 383.6 645.1 379.9 645.2 376.2 C 645.3 372.6 645.0 368.9 644.9 365.2 C 644.7 361.6 644.5 357.9 644.3 354.2 C 644.2 350.6 644.1 346.9 643.9 343.2 C 643.8 339.5 643.6 335.9 643.4 332.2 C 643.2 328.5 643.1 324.9 643.0 321.2 C 642.9 317.5 642.8 313.9 642.8 310.2 C 642.8 306.5 642.8 302.8 642.8 299.2 C 642.8 295.5 642.7 291.8 642.8 288.1 C 642.9 284.5 643.1 280.8 643.2 277.1 C 643.3 273.5 643.4 269.8 643.4 266.1 C 643.4 262.4 643.4 258.8 643.4 255.1 C 643.4 251.4 643.4 247.8 643.4 244.1 C 643.4 240.4 643.4 236.7 643.4 233.1 C 643.4 229.4 643.4 225.7 643.4 222.0 C 643.4 218.4 643.5 214.7 643.4 211.0 C 643.3 207.3 643.3 203.7 643.1 200.0 C 642.8 196.3 642.6 192.6 641.9 189.1 C 641.2 185.5 640.3 181.8 638.8 178.5 C 637.3 175.2 635.3 171.9 632.9 169.3 C 630.4 166.7 627.3 164.3 624.0 162.8 C 620.8 161.3 617.0 160.3 613.4 160.2 C 609.8 160.1 605.9 160.7 602.6 162.0 C 599.3 163.3 596.0 165.5 593.4 167.9 C 590.8 170.4 588.7 173.6 587.1 176.9 C 585.4 180.1 584.5 183.8 583.7 187.3 C 582.9 190.9 582.6 194.6 582.2 198.2 C 581.8 201.9 581.6 205.6 581.3 209.2 C 581.0 212.9 580.8 216.6 580.5 220.2 C 580.2 223.9 579.9 227.5 579.7 231.2 C 579.4 234.9 579.2 238.5 578.9 242.2 C 578.7 245.9 578.4 249.5 578.2 253.2 C 578.0 256.9 577.9 260.5 577.7 264.2 C 577.5 267.9 577.3 271.5 577.1 275.2 C 576.8 278.9 576.7 282.5 576.4 286.2 C 576.2 289.9 575.8 293.5 575.6 297.2 C 575.3 300.8 575.0 304.5 574.7 308.2 C 574.4 311.8 574.0 315.5 573.7 319.1 C 573.3 322.8 572.9 326.4 572.5 330.1 C 572.1 333.7 571.6 337.4 571.1 341.0 C 570.6 344.6 570.0 348.3 569.4 351.9 C 568.9 355.5 568.2 359.2 567.7 362.8 C 567.1 366.4 566.5 370.0 566.1 373.7 C 565.6 377.3 565.3 381.0 565.0 384.7 C 564.7 388.3 564.4 392.0 564.1 395.6 C 563.8 399.3 563.6 403.0 563.3 406.6 C 562.9 410.3 562.5 413.9 562.2 417.6 C 561.9 421.2 561.6 424.9 561.3 428.6 C 561.0 432.2 560.7 435.9 560.4 439.5 C 560.1 443.2 559.9 446.9 559.6 450.5 C 559.3 454.2 559.0 457.8 558.6 461.5 C 558.3 465.2 558.3 469.0 557.4 472.4 C 556.5 475.9 555.7 480.7 553.2 482.3 C 550.8 484.0 545.6 483.8 542.9 482.2 C 540.1 480.7 538.2 476.6 536.9 473.3 C 535.6 470.0 535.5 466.1 535.1 462.4 C 534.7 458.8 534.7 455.1 534.5 451.4 C 534.4 447.8 534.3 444.1 534.2 440.4 C 534.1 436.7 534.2 433.1 534.2 429.4 C 534.2 425.7 534.1 422.1 534.0 418.4 C 533.9 414.7 533.7 411.0 533.6 407.4 C 533.5 403.7 533.5 400.0 533.4 396.4 C 533.3 392.7 533.1 389.0 533.0 385.3 C 532.9 381.7 533.0 378.0 532.9 374.3 C 532.8 370.7 532.5 367.0 532.4 363.3 C 532.3 359.7 532.4 356.0 532.4 352.3 C 532.4 348.6 532.4 345.0 532.4 341.3 C 532.4 337.6 532.4 333.9 532.2 330.3 C 532.0 326.6 531.6 322.9 531.2 319.3 C 530.9 315.6 530.4 312.0 530.0 308.3 C 529.5 304.7 529.1 301.1 528.7 297.4 C 528.3 293.7 528.0 290.1 527.6 286.4 C 527.2 282.8 526.9 279.1 526.5 275.5 C 526.2 271.8 525.8 268.2 525.5 264.5 C 525.2 260.8 525.0 257.2 524.7 253.5 C 524.4 249.9 524.1 246.2 523.9 242.5 C 523.6 238.9 523.4 235.2 523.2 231.5 C 523.0 227.9 523.0 224.2 522.8 220.5 C 522.6 216.9 522.3 213.2 522.2 209.5 C 522.1 205.9 522.2 202.2 522.2 198.5 C 522.2 194.8 522.3 191.2 522.2 187.5 C 522.1 183.8 522.0 180.1 521.9 176.5 C 521.8 172.8 521.7 169.1 521.6 165.5 C 521.5 161.8 521.4 158.1 521.3 154.4 C 521.1 150.8 521.0 147.1 520.8 143.4 C 520.5 139.8 520.4 136.1 519.8 132.5 C 519.3 128.8 518.7 125.1 517.5 121.7 C 516.3 118.3 514.7 114.8 512.5 112.0 C 510.3 109.1 507.4 106.5 504.4 104.6 C 501.3 102.7 497.7 101.3 494.2 100.6 C 490.6 99.9 486.8 99.9 483.2 100.4 Z';

// Finger creases are carried by the texture; nothing extra is drawn.
export const CREASES = [];

// Finger geometry: [outer x, inner x, tip y, base y] and the two crease rows.
export const FINGERS = {
	index: { name: 'Index', planet: 'Jupiter', x0: 321, x1: 373, tip: 150, base: 480, creases: [239, 348] },
	middle: { name: 'Middle', planet: 'Saturn', x0: 450, x1: 505, tip: 100, base: 484, creases: [204, 330] },
	ring: { name: 'Ring', planet: 'Apollo', x0: 573, x1: 624, tip: 160, base: 531, creases: [260, 383] },
	little: { name: 'Little', planet: 'Mercury', x0: 688, x1: 731, tip: 292, base: 531, creases: [357, 436] },
};

// Major lines — the default forms used as landmarks on every plate.
export const LINES = {
	life: 'M 322 592 C 400 700 470 860 452 978',
	heart: 'M 748 625 C 650 685 500 668 392 548',
	head: 'M 326 612 C 440 632 575 672 690 750',
	fate: 'M 526 972 C 528 830 502 680 486 538',
};

// Minor lines, in their classical positions.
export const MINOR = {
	sun: 'M 612 890 C 612 790 606 690 600 610',
	mercury: 'M 468 935 C 560 840 650 730 702 640',
	girdle: 'M 412 505 C 480 468 590 478 662 548',
	marriage: ['M 748 565 L 712 568', 'M 750 586 L 720 588'],
	solomon: 'M 318 560 C 345 600 400 600 428 555',
	via: 'M 560 965 C 620 910 665 862 697 802',
	simian: 'M 326 612 C 460 660 620 655 748 625',
	rascettes: ['M 405 975 C 490 990 570 990 636 975'],
};

export const MOUNTS = {
	jupiter: { name: 'Jupiter', cx: 354, cy: 535, rx: 44, ry: 38, rot: 0, side: 'left', label: [205, 470] },
	saturn: { name: 'Saturn', cx: 480, cy: 540, rx: 46, ry: 38, rot: 0, side: 'top', label: [480, 62] },
	apollo: { name: 'Apollo', cx: 600, cy: 588, rx: 44, ry: 38, rot: 0, side: 'right', label: [796, 400] },
	mercury: { name: 'Mercury', cx: 704, cy: 592, rx: 34, ry: 34, rot: 0, side: 'right', label: [796, 500] },
	upperMars: { name: 'Upper Mars', cx: 704, cy: 722, rx: 36, ry: 56, rot: -6, side: 'right', label: [796, 640] },
	lowerMars: { name: 'Lower Mars', cx: 354, cy: 655, rx: 30, ry: 38, rot: 0, side: 'left', label: [205, 700] },
	plainMars: { name: 'Plain|of Mars', cx: 520, cy: 760, rx: 84, ry: 74, rot: 0, side: 'right', label: [796, 770] },
	venus: { name: 'Venus', cx: 340, cy: 820, rx: 82, ry: 126, rot: -22, side: 'left', label: [190, 860] },
	luna: { name: 'Luna', cx: 662, cy: 862, rx: 72, ry: 108, rot: 10, side: 'right', label: [796, 900] },
};

/* ── Carrying old atlas coordinates across ───────────────────────── */

// The previous schematic hand's geometry. Plates authored against it are
// warped onto the new anatomy with a thin-plate spline through these pairs.
const OLD_LINES = {
	life: 'M 352 535 C 330 650 330 800 430 985',
	heart: 'M 735 545 C 640 562 520 556 425 500',
	head: 'M 355 560 C 450 600 570 650 665 690',
	fate: 'M 520 980 C 525 800 518 620 512 475',
};
const OLD_POINTS = {
	// [old x, old y, new x, new y]
	jupiter: [405, 495, 354, 535], saturn: [512, 480, 480, 540], apollo: [616, 495, 600, 588], mercury: [702, 533, 704, 592],
	upperMars: [690, 650, 704, 722], lowerMars: [372, 600, 354, 655], plainMars: [522, 705, 520, 760], venus: [392, 770, 340, 820], luna: [655, 815, 662, 862],
	indexBase: [411, 432, 347, 480], middleBase: [518, 430, 478, 484], ringBase: [619, 438, 598, 531], littleBase: [713, 470, 710, 531],
	indexTip: [411, 152, 347, 150], middleTip: [518, 102, 478, 100], ringTip: [619, 142, 598, 160], littleTip: [713, 250, 710, 292],
	thumbTip: [180, 445, 140, 508], thumbWeb: [345, 562, 312, 675], wristL: [335, 1010, 398, 985], wristR: [605, 1010, 640, 985], wristC: [470, 1020, 520, 995],
	percHigh: [740, 470, 748, 555], percMid: [700, 750, 725, 800], percLow: [640, 880, 680, 935],
	edgeVenus: [300, 690, 262, 760], edgeVenusLow: [300, 800, 300, 880],
};
let _tps;
function tps() {
	if (_tps) return _tps;
	const src = [];
	const dst = [];
	for (const p of Object.values(OLD_POINTS)) { src.push([p[0], p[1]]); dst.push([p[2], p[3]]); }
	for (const k of Object.keys(OLD_LINES)) for (const u of [0, 0.25, 0.5, 0.75, 1]) { const a = pointAt(OLD_LINES[k], u); const b = pointAt(LINES[k], u); src.push([a.x, a.y]); dst.push([b.x, b.y]); }
	const n = src.length;
	const U = (r2) => (r2 === 0 ? 0 : r2 * Math.log(r2));
	const size = n + 3;
	const A = Array.from({ length: size }, () => new Array(size).fill(0));
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) { const dx = src[i][0] - src[j][0]; const dy = src[i][1] - src[j][1]; A[i][j] = U(dx * dx + dy * dy); }
		A[i][n] = 1; A[i][n + 1] = src[i][0]; A[i][n + 2] = src[i][1];
		A[n][i] = 1; A[n + 1][i] = src[i][0]; A[n + 2][i] = src[i][1];
	}
	const solve = (rhs) => {
		const M = A.map((r, i) => [...r, rhs[i]]);
		for (let c = 0; c < size; c++) {
			let piv = c; for (let r = c + 1; r < size; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
			[M[c], M[piv]] = [M[piv], M[c]];
			for (let r = 0; r < size; r++) if (r !== c) { const f = M[r][c] / M[c][c]; if (f) for (let k = c; k <= size; k++) M[r][k] -= f * M[c][k]; }
		}
		return M.map((r, i) => r[size] / M[i][i]);
	};
	const wx = solve([...dst.map((d) => d[0]), 0, 0, 0]);
	const wy = solve([...dst.map((d) => d[1]), 0, 0, 0]);
	_tps = (x, y) => {
		let ox = wx[n] + wx[n + 1] * x + wx[n + 2] * y;
		let oy = wy[n] + wy[n + 1] * x + wy[n + 2] * y;
		for (let i = 0; i < n; i++) { const dx = x - src[i][0]; const dy = y - src[i][1]; const u = U(dx * dx + dy * dy); ox += wx[i] * u; oy += wy[i] * u; }
		return [ox, oy];
	};
	return _tps;
}

/** Map a point authored in the old hand space onto the new hand. */
export function remapPoint([x, y]) {
	const [nx, ny] = tps()(x, y);
	return [Math.round(nx * 10) / 10, Math.round(ny * 10) / 10];
}

/** Map every coordinate pair of an old-space path onto the new hand. */
export function remap(d) {
	const nums = d.match(/-?\d*\.?\d+/g).map(Number);
	const cmds = d.match(/[A-Za-z]/g);
	let i = 0;
	return cmds
		.map((c) => {
			const count = c === 'Z' || c === 'z' ? 0 : c === 'H' || c === 'V' ? 1 : c === 'A' || c === 'a' ? 7 : { M: 2, L: 2, C: 6, Q: 4, S: 4, T: 2 }[c] ?? 2;
			const args = nums.slice(i, i + count);
			i += count;
			if ('MLCQST'.includes(c)) {
				const out = [];
				for (let k = 0; k < args.length; k += 2) out.push(...remapPoint([args[k], args[k + 1]]));
				return `${c} ${out.join(' ')}`;
			}
			return `${c} ${args.join(' ')}`;
		})
		.join(' ');
}

/* ── Document scaffolding ─────────────────────────────────────────── */

export function defs() {
	return `<defs>
  <radialGradient id="haze" cx="50%" cy="48%" r="60%">
    <stop offset="0%" stop-color="#3a2470" stop-opacity="0.55"/>
    <stop offset="55%" stop-color="#1a1030" stop-opacity="0.35"/>
    <stop offset="100%" stop-color="${BG}" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#17122a"/>
    <stop offset="100%" stop-color="#0d0a1a"/>
  </linearGradient>
  <radialGradient id="mountGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="${GOLD_LIGHT}" stop-opacity="0.55"/>
    <stop offset="60%" stop-color="${GOLD}" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="${GOLD}" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="violetGlow" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="${VIOLET}" stop-opacity="0.5"/>
    <stop offset="100%" stop-color="${VIOLET}" stop-opacity="0"/>
  </radialGradient>
  <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="22"/></filter>
  <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
  <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="5"/></filter>
  <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
    <line x1="0" y1="0" x2="0" y2="7" stroke="${GOLD}" stroke-width="0.5" opacity="0.28"/>
  </pattern>
  <pattern id="hatch2" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-52)">
    <line x1="0" y1="0" x2="0" y2="9" stroke="${GOLD}" stroke-width="0.4" opacity="0.16"/>
  </pattern>
  <pattern id="grille" width="8" height="8" patternUnits="userSpaceOnUse">
    <path d="M 0 4 H 8 M 4 0 V 8" stroke="${GOLD_LIGHT}" stroke-width="0.9" opacity="0.8"/>
  </pattern>
  <clipPath id="hand"><path d="${HAND}"/></clipPath>
  <image id="tex" href="${TEXTURE}" x="0" y="0" width="${W}" height="${H}" preserveAspectRatio="none"/>
</defs>`;
}

export function ground(w = W, h = H) {
	return `<rect width="${w}" height="${h}" fill="${BG}"/>
<rect width="${w}" height="${h}" fill="url(#haze)"/>`;
}

export function registration(w = W, h = H) {
	return `<g stroke="${GOLD}" stroke-width="1" opacity="0.45" fill="none">
  <path d="M 28 46 V 28 H 46"/><path d="M ${w - 28} 46 V 28 H ${w - 46}"/>
  <path d="M 28 ${h - 46} V ${h - 28} H 46"/><path d="M ${w - 28} ${h - 46} V ${h - 28} H ${w - 46}"/>
</g>`;
}

export function star(x, y, r = 8, opacity = 0.7) {
	const s = r / 8;
	return `<path transform="translate(${x} ${y}) scale(${s})" d="M 0 -8 l 2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5z" fill="${GOLD}" opacity="${opacity}"/>`;
}

export function sparkles(w = W, h = H) {
	return `<g>
  ${star(120, 148, 8, 0.8)}${star(w - 210, 208, 6, 0.6)}${star(150, h - 120, 6, 0.5)}
  <g fill="${GOLD}" opacity="0.7"><circle cx="${w - 180}" cy="${h - 80}" r="1.5"/><circle cx="90" cy="320" r="1.2"/><circle cx="${w - 160}" cy="120" r="1.2"/></g>
</g>`;
}

/**
 * The hand itself, in hand space. `lines` controls the major lines:
 *   'dim'  — all four as quiet landmarks (default)
 *   'none' — no lines (the caller draws its own)
 *   array  — only these keys, dim
 */
export function handBody({ lines = 'dim', fateDashed = true, bloom = true, hatch = false } = {}) {
	const keys = lines === 'none' ? [] : Array.isArray(lines) ? lines : Object.keys(LINES);
	return `<g class="hand">
${bloom ? `<ellipse cx="480" cy="700" rx="330" ry="300" fill="url(#violetGlow)" filter="url(#blur)" opacity="0.9"/>` : ''}
<path d="${HAND}" fill="url(#skin)"/>
<g clip-path="url(#hand)"><use href="#tex"/></g>
${hatch ? `<g clip-path="url(#hand)"><rect width="${W}" height="${H}" fill="url(#hatch)"/></g>` : ''}
<path d="${HAND}" fill="none" stroke="${GOLD_LIGHT}" stroke-width="7" opacity="0.14" filter="url(#softBlur)"/>
<path d="${HAND}" fill="none" stroke="${GOLD}" stroke-width="1.6" opacity="0.95"/>
<g fill="none" stroke="${GOLD}" stroke-width="1.2" opacity="0.5" stroke-linecap="round">
  ${CREASES.map((d) => `<path d="${d}"/>`).join('\n  ')}
</g>
<g fill="none" stroke="${GOLD_LIGHT}" stroke-width="1.9" stroke-linecap="round" opacity="0.6">
  ${keys.map((k) => `<path d="${LINES[k]}"${k === 'fate' && fateDashed ? ' stroke-dasharray="1 5" opacity="0.8"' : ''}/>`).join('\n  ')}
</g>
</g>`;
}

/** The engraved shading image alone, in hand space (callers clip it). */
export function handTexture() {
	return `<use href="#tex"/>`;
}

/** A bright, lit line — the thing the plate is about. */
export function glowLine(d, { color = GOLD_BRIGHT, width = 3, opacity = 1, dash = '', glow = true } = {}) {
	return `<g fill="none" stroke-linecap="round" stroke-linejoin="round">
  ${glow ? `<path d="${d}" stroke="${color}" stroke-width="${width * 3}" opacity="${0.35 * opacity}" filter="url(#lineGlow)"${dash ? ` stroke-dasharray="${dash}"` : ''}/>` : ''}
  <path d="${d}" stroke="${color}" stroke-width="${width}" opacity="${opacity}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>
</g>`;
}

export function dot(x, y, r = 4, color = GOLD_BRIGHT, opacity = 1) {
	return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" opacity="${opacity}"/>`;
}

/** A numbered gold disc — for sequence plates. */
export function numberDisc(x, y, n, { r = 17 } = {}) {
	return `<g>
  <circle cx="${x}" cy="${y}" r="${r + 6}" fill="${GOLD_LIGHT}" opacity="0.18" filter="url(#softBlur)"/>
  <circle cx="${x}" cy="${y}" r="${r}" fill="${BG}" stroke="${GOLD_BRIGHT}" stroke-width="1.4"/>
  <text x="${x}" y="${y + r * 0.38}" text-anchor="middle" font-family="${FONT}" font-size="${r * 1.1}" fill="${GOLD_BRIGHT}">${n}</text>
</g>`;
}

/* ── Labels and leaders ───────────────────────────────────────────── */

export function text(x, y, str, { anchor = 'start', size = 18, color = INK, letter = 2.5, italic = false, upper = true, opacity = 1 } = {}) {
	const parts = String(str).split('|');
	const tspans = parts
		.map((t, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : size * 1.2}">${escape(upper ? t.toUpperCase() : t)}</tspan>`)
		.join('');
	return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="${FONT}" font-size="${size}" letter-spacing="${letter}" fill="${color}" opacity="${opacity}"${italic ? ' font-style="italic"' : ''}>${tspans}</text>`;
}

/** Small-caps body caption under a compare hand (not uppercase, gentler). */
export function caption(x, y, str, { size = 17, color = GOLD_LIGHT, anchor = 'middle' } = {}) {
	return text(x, y, str, { anchor, size, color, letter: 2, upper: true });
}

/**
 * Elbow leader from a label anchor to a target point.
 * side: which side of the target the label sits on ('left' | 'right' | 'top' | 'bottom').
 */
export function leader([lx, ly], [tx, ty], { side = 'right', emph = false, stub = 40, dotR = 2.6 } = {}) {
	let path;
	if (side === 'top' || side === 'bottom') {
		path = `M ${lx} ${ly} L ${tx} ${ty}`;
	} else {
		const dir = side === 'right' ? -1 : 1;
		const sx = lx + dir * 14;
		path = `M ${sx} ${ly} L ${sx + dir * stub} ${ly} L ${tx} ${ty}`;
	}
	const color = emph ? GOLD_LIGHT : INK;
	return `<g opacity="${emph ? 1 : 0.85}">
  <path d="${path}" fill="none" stroke="${color}" stroke-width="1" stroke-dasharray="2 4" opacity="0.9"/>
  <circle cx="${tx}" cy="${ty}" r="${dotR}" fill="${emph ? GOLD_BRIGHT : INK}"/>
</g>`;
}

/**
 * Label + leader in one call. `at` is the label anchor; `to` is the point on
 * the hand. Handles multi-line labels (split on |) and side-based anchoring.
 */
export function wrap(str, max) {
	const s = String(str);
	if (s.includes('|') || s.length <= max) return s;
	const mid = s.length / 2;
	let best = -1;
	for (let i = 0; i < s.length; i++) if (s[i] === ' ' && (best < 0 || Math.abs(i - mid) < Math.abs(best - mid))) best = i;
	return best < 0 ? s : s.slice(0, best) + '|' + s.slice(best + 1);
}

export function callout({ at, to, label: rawLabel, side = 'right', emph = false, size, sub: rawSub }) {
	const [lx, ly] = at;
	const anchor = side === 'right' ? 'start' : side === 'left' ? 'end' : 'middle';
	const sz = size ?? (emph ? 19 : 16);
	const label = side === 'top' || side === 'bottom' ? String(rawLabel) : wrap(rawLabel, 12);
	const sub = rawSub ? wrap(rawSub, 26) : rawSub;
	const lines = String(label).split('|').length;
	let ty;
	if (side === 'top') ty = ly - (lines - 1) * sz * 1.2;
	else if (side === 'bottom') ty = ly + sz;
	else ty = ly + 7 - (lines - 1) * (sz * 0.6);
	const leadFrom = side === 'top' ? [lx, ly + 10] : side === 'bottom' ? [lx, ly - 4] : [lx, ly];
	const color = emph ? GOLD_BRIGHT : INK;
	return `<g>
${leader(leadFrom, to, { side, emph })}
${text(lx, ty, label, { anchor, size: sz, color })}
${sub ? text(lx, ty + sz * 1.05 + (lines - 1) * sz * 1.2, sub, { anchor, size: 13, color: INK, letter: 1.5, upper: false, italic: true, opacity: 0.9 }) : ''}
</g>`;
}

/* ── Path geometry ────────────────────────────────────────────────── */

/** Parse an "M x y C … L …" path into cubic segments [[p0,p1,p2,p3], …]. */
export function parsePath(d) {
	const tokens = d.match(/[MCLZ]|-?\d*\.?\d+/g) || [];
	const segs = [];
	let cur = null;
	let i = 0;
	const num = () => parseFloat(tokens[i++]);
	while (i < tokens.length) {
		const t = tokens[i++];
		if (t === 'M') {
			cur = [num(), num()];
		} else if (t === 'C') {
			const p1 = [num(), num()];
			const p2 = [num(), num()];
			const p3 = [num(), num()];
			segs.push([cur, p1, p2, p3]);
			cur = p3;
		} else if (t === 'L') {
			const p3 = [num(), num()];
			const p1 = [cur[0] + (p3[0] - cur[0]) / 3, cur[1] + (p3[1] - cur[1]) / 3];
			const p2 = [cur[0] + (2 * (p3[0] - cur[0])) / 3, cur[1] + (2 * (p3[1] - cur[1])) / 3];
			segs.push([cur, p1, p2, p3]);
			cur = p3;
		}
	}
	return segs;
}

function cubic([p0, p1, p2, p3], t) {
	const mt = 1 - t;
	const a = mt * mt * mt;
	const b = 3 * mt * mt * t;
	const c = 3 * mt * t * t;
	const d = t * t * t;
	return [a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0], a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1]];
}

/** Sample n points evenly by arc length along the path. Each point: {x, y, angle}. */
export function samplePath(d, n = 60) {
	const segs = parsePath(d);
	const raw = [];
	for (const s of segs) for (let k = 0; k <= 48; k++) raw.push(cubic(s, k / 48));
	const cum = [0];
	for (let k = 1; k < raw.length; k++) cum.push(cum[k - 1] + Math.hypot(raw[k][0] - raw[k - 1][0], raw[k][1] - raw[k - 1][1]));
	const total = cum[cum.length - 1];
	const out = [];
	for (let k = 0; k < n; k++) {
		const target = (total * k) / (n - 1);
		let j = cum.findIndex((c) => c >= target);
		if (j <= 0) j = 1;
		const a = raw[j - 1];
		const b = raw[j];
		const span = cum[j] - cum[j - 1] || 1;
		const f = (target - cum[j - 1]) / span;
		out.push({ x: a[0] + (b[0] - a[0]) * f, y: a[1] + (b[1] - a[1]) * f, angle: (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI });
	}
	return out;
}

/** The point and tangent at arc-length fraction u (0–1). */
export function pointAt(d, u) {
	const pts = samplePath(d, 201);
	return pts[Math.max(0, Math.min(200, Math.round(u * 200)))];
}

/** A sub-path between arc-length fractions u0 and u1, as a polyline path. */
export function subPath(d, u0, u1) {
	const pts = samplePath(d, 201);
	const i0 = Math.round(u0 * 200);
	const i1 = Math.round(u1 * 200);
	return 'M ' + pts.slice(i0, i1 + 1).map((p) => `${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' L ');
}

/** A chained line: small linked loops along the path instead of one stroke. */
export function chained(d, { r = 6, color = GOLD_BRIGHT, opacity = 0.95, width = 1.6 } = {}) {
	const pts = samplePath(d, 400);
	const total = pts.length;
	const step = Math.max(2, Math.round((r * 1.6 * (total - 1)) / lengthOf(pts)));
	const out = [];
	for (let k = 0; k < total; k += step) {
		const p = pts[k];
		out.push(`<ellipse cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" rx="${r}" ry="${(r * 0.62).toFixed(1)}" transform="rotate(${p.angle.toFixed(1)} ${p.x.toFixed(1)} ${p.y.toFixed(1)})"/>`);
	}
	return `<g fill="none" stroke="${color}" stroke-width="${width}" opacity="${opacity}">${out.join('')}</g>`;
}

function lengthOf(pts) {
	let l = 0;
	for (let k = 1; k < pts.length; k++) l += Math.hypot(pts[k].x - pts[k - 1].x, pts[k].y - pts[k - 1].y);
	return l;
}

/** An island: the line splits into a lens between u0 and u1 and rejoins. */
export function island(d, { u0 = 0.4, u1 = 0.6, width = 9, color = GOLD_BRIGHT } = {}) {
	const pts = samplePath(d, 201);
	const i0 = Math.round(u0 * 200);
	const i1 = Math.round(u1 * 200);
	const upper = [];
	const lower = [];
	for (let k = i0; k <= i1; k++) {
		const p = pts[k];
		const u = (k - i0) / (i1 - i0);
		const off = width * Math.sin(Math.PI * u);
		const a = (p.angle * Math.PI) / 180;
		const nx = -Math.sin(a);
		const ny = Math.cos(a);
		upper.push(`${(p.x + nx * off).toFixed(1)} ${(p.y + ny * off).toFixed(1)}`);
		lower.push(`${(p.x - nx * off).toFixed(1)} ${(p.y - ny * off).toFixed(1)}`);
	}
	return `<g fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round">
  <path d="M ${upper.join(' L ')}"/><path d="M ${lower.join(' L ')}"/>
</g>`;
}

/* ── Composition ──────────────────────────────────────────────────── */

/** Wrap hand-space drawing in a placed, scaled (and optionally mirrored) group. */
export function place(inner, { x = 40, y = 0, scale = 1, mirror = false } = {}) {
	const m = mirror ? ` translate(${W} 0) scale(-1 1)` : '';
	return `<g transform="translate(${x} ${y}) scale(${scale})${m}">${inner}</g>`;
}

/** Full document. */
export function svg({ title, w = W, h = H, body, marks = true }) {
	return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-labelledby="t">
<title id="t">${escape(title)}</title>
${defs()}
${ground(w, h)}
${marks ? registration(w, h) : ''}
${marks ? sparkles(w, h) : ''}
${body}
</svg>
`;
}

export function escape(s) {
	return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function writePlate(outDir, file, content) {
	mkdirSync(outDir, { recursive: true });
	writeFileSync(join(outDir, file), content, 'utf8');
	console.log('wrote', file);
}

/**
 * Specimen sheet: a grid of small panels, each showing one line quality or
 * marking on a short stretch of line, labelled beneath. Used for the
 * "what to look for" close-ups that every line lesson and article shares.
 */
export function specimenSheet({ items, cols = 4, panelW = 226, panelH = 210, gutter = 14, pad = 34, title }) {
	const rows = Math.ceil(items.length / cols);
	const w = pad * 2 + cols * panelW + (cols - 1) * gutter;
	const h = pad * 2 + rows * panelH + (rows - 1) * gutter;
	const panels = items.map((it, i) => {
		const c = i % cols;
		const r = Math.floor(i / cols);
		const x = pad + c * (panelW + gutter);
		const y = pad + r * (panelH + gutter);
		const cx = x + panelW / 2;
		const cy = y + panelH / 2 - 22;
		const lines = String(it.label).split('|');
		return `<g>
  <rect x="${x}" y="${y}" width="${panelW}" height="${panelH}" rx="4" fill="#0d0a1a" stroke="${GOLD}" stroke-opacity="0.28"/>
  <rect x="${x + 8}" y="${y + 8}" width="${panelW - 16}" height="${panelH - 16}" rx="2" fill="none" stroke="${GOLD}" stroke-opacity="0.12"/>
  <ellipse cx="${cx}" cy="${cy}" rx="${panelW * 0.42}" ry="${panelH * 0.32}" fill="url(#violetGlow)" filter="url(#softBlur)" opacity="0.5"/>
  ${it.draw(cx, cy)}
  ${text(cx, y + panelH - 30 - (lines.length - 1) * 16, it.label, { anchor: 'middle', size: 14, color: GOLD_LIGHT, letter: 2 })}
</g>`;
	});
	return svg({ title, w, h, marks: false, body: panels.join('\n') });
}

/** The reference stroke used inside specimen panels. */
export function specimenLine(cx, cy, { x0 = -74, x1 = 74, lift = 14 } = {}) {
	return `M ${cx + x0} ${cy + lift} C ${cx + x0 * 0.4} ${cy - lift * 0.6} ${cx + x1 * 0.4} ${cy - lift * 0.6} ${cx + x1} ${cy + lift}`;
}

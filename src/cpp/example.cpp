#include <fftw3.h>
#include <fftw3-mpi.h>
#include <stdio.h>

int main(){
	fftw_mpi_init();

	printf("hello world");
	double party[] = {1,2,3,4,5,6,5,4,3,2,1,2,3,4,5,6,4,3,2,1};

	fftw_complex *out;

	//out = (fftw_complex*) fftw_malloc(sizeof(fftw_complex) * N);

	fftw_plan plan;
	//p = plan_dft_r2c_1d(3, party, out);
}

